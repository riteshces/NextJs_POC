import Link from "next/link";
import { getData } from "@/app/lib/services/http-services";
import { Product } from "@/app/_interfaces/products";

export const revalidate = 3600;

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const productUrl =
    `${process.env.NEXT_APP_PRODUCTSAPI}/products/` + params.id;

  const data: Product = await getData(productUrl);

  return (
    <div className="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex pt-6">
        <img
          src={data.image}
          alt={data.title}
          className="h-48 w-48 rounded-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
        <p className="text-gray-600">{data.description}</p>
        <p className="text-lg font-bold text-gray-900">Price: {data.price}$</p>
        <p className="text-gray-600">Category: {data.category}</p>

        <Link
          href="/master/products"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
