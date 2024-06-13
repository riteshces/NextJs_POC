"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      <Link
        href="/dashboard"
        className={`link ${
          pathname === "/dashboard"
            ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
        aria-current="page"
      >
        Dashboard
      </Link>

      <Link
        href="/master/products"
        className={`link ${
          pathname === "/master/products"
            ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
        aria-current="page"
      >
        Products
      </Link>
    </div>
  );
};

export default Navbar;
