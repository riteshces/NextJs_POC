"use client";
import { addProduct } from "@/app/lib/actions/product-action";
import { useFormStatus, useFormState } from "react-dom";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import Link from "next/link";

const initialState = {
  message: "",
};

function AddProduct() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(addProduct, initialState);
  if (state?.message) {
    toast(state?.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    redirect("/master/products");
  }

  return (
    <div>
      <form className="max-w-md mx-auto p-4 pt-6 mb-4" action={formAction}>
        <h2 className="text-lg font-bold mb-4">Add Product</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productName"
            name="productName"
            type="text"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productPrice"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productPrice"
            type="number"
            name="productPrice"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productDescription"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productDescription"
            name="productDescription"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productImage"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productImage"
            name="productImage"
            type="text"
            placeholder="Enter product image url"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productCategory"
          >
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productCategory"
            name="productCategory"
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home-goods">Home Goods</option>
          </select>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={pending}
        >
          Add Product
        </button>

        <Link
          href="/master/products"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mx-7 rounded"
        >
          Back
        </Link>
      </form>
    </div>
  );
}

export default AddProduct;
