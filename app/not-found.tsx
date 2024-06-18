import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              404 - Page Not Found
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sorry, the page you are looking for does not exist.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
