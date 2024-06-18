"use client";
import { authenticate } from "@/app/lib/actions/login-action";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ErrorState } from "@/app/lib/interfaces/types/error-state";
import { FormData } from "@/app/lib/interfaces/form-data";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<ErrorState>("");
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    try {
      const loginResult = await authenticate(formData);
      if (loginResult) {
        if (
          typeof loginResult === "string" &&
          loginResult === "Authentication successful."
        ) {
          router.push("/dashboard");
        } else {
          const errorsArray =
            typeof loginResult === "string"
              ? [loginResult]
              : loginResult.errors || [];
          setErrors({ errors: errorsArray });
        }
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your credentials to access your account.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email</label>
              <input
                type="text"
                id="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User name"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-900"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              data-testid="Login"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              Login
            </button>
          </div>

          <div className="flex items-center text-red-700 justify-between">
            {typeof errors === "string" ? (
              <p>{errors}</p>
            ) : (
              <ul>
                {errors.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
