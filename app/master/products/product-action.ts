"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { postData } from "@/app/lib/services/http-services";
import { Product } from "@/app/_interfaces/products";

export async function addProduct(prevState: any, formData: FormData) {
  const schema = z.object({
    productName: z.string().nonempty("Product name is required"),
    productPrice: z.string().nonempty("Product price is required"),
    productDescription: z.string().optional(),
    productImage: z.string().optional(),
    productCategory: z.string().nonempty("Product category is required"),
  });

  const productParse = {
    productName: formData.get("productName"),
    productPrice: formData.get("productPrice"),
    productDescription: formData.get("productDescription"),
    productImage: formData.get("productImage"),
    productCategory: formData.get("productCategory"),
  };

  try {
    const parsedProductData = schema.safeParse(productParse);
    if (!parsedProductData.success) {
      return {
        errors: parsedProductData.error.flatten().fieldErrors,
      };
    }

    const url = `${process.env.NEXT_APP_PRODUCTSAPI}/products`;
    const data2: Product = await postData(url, parsedProductData.data);
    if (data2.id) {
      revalidatePath("/master/products/add");
      return {
        message: `Product added successfully.`,
      };
    } else {
      return { message: "Failed to add new product" };
    }
  } catch (e) {
    return { message: "Failed to add new product" };
  }
}
