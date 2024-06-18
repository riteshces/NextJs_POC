import Link from "next/link";
import { getData } from "@/app/lib/services/http-services";
import { urls } from "@/app/lib/constants/url-constants";
import { Product as Products } from "@/app/lib/interfaces/products";
import { Suspense } from "react";

export default async function ProductList() {
  const url = `${process.env.NEXT_APP_PRODUCTSAPI}/products`;
  const data: Products[] = await getData(url);
  return (
    <Suspense fallback={<div className="my-10">Loading...</div>}>
      <>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="mb-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Products
              </h1>
            </div>
            <div className="mb-4">
              <Link
                href={"/master/products/add"}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Add new product
              </Link>
            </div>
          </div>
        </header>
        <main>
          <div className="z-10 w-full items-center justify-between text-sm lg:flex">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sr No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    View
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((product) => (
                  <tr key={product.id} role="table-row" className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={product.image}
                        height={"50px"}
                        width={"50px"}
                        alt={product.title}
                      />
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        href={`${urls.master}/products/${product.id}`}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        View
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </>
    </Suspense>
  );
}
