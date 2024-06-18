"use server";
import { postData } from "@/app/lib/services/http-services";
import { cookies } from "next/headers";
import { z } from "zod";
import { ErrorState } from "@/app/lib/interfaces/types/error-state";
import { FormData } from "@/app/lib/interfaces/form-data";

interface ResponseMain {
  token: string;
}

export async function authenticate(formData: FormData): Promise<ErrorState> {
  try {
    const schema = z.object({
      username: z
        .string({
          required_error: "Username is required",
          invalid_type_error: "Username must be a string",
        })
        .min(4, "Please enter a valid user name"),
      password: z
        .string({
          required_error: "Password is required",
          invalid_type_error: "Password must be a string",
        })
        .min(4, "Please enter a valid password"),
    });

    const { email, password } = formData;
    const loginData = {
      username: email.trim(),
      password: password.trim(),
    };

    const parsedData = schema.safeParse(loginData);
    if (!parsedData.success) {
      const errorMessages = parsedData.error.errors.map(
        (error) => error.message
      );
      return { errors: errorMessages };
    }

    const url = `${process.env.NEXT_APP_PRODUCTSAPI}/auth/login`;
    const data: ResponseMain = await postData(url, parsedData.data);
    if (data.token) {
      const encryptedSessionData = data.token;
      cookies().set("session", encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      return "Authentication successful.";
    }
    return "Wrong username or password.";
  } catch (error) {
    console.error("Authentication error:", error);
    return "Wrong user name or password.";
  }
}
