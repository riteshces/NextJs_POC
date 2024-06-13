import Link from "next/link";
const ProductDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex pt-6">
        <img
          src="product-image.jpg"
          alt="Product Image"
          className="h-48 w-48 rounded-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900">Product 1</h2>
        <p className="text-gray-600">Product Description</p>
        <p className="text-lg font-bold text-gray-900">Price: $10.99</p>
        <p className="text-gray-600">Category: Electronics</p>

        <Link
          href="/master/products"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
