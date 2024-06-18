import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "CES POC",
  description: "CES POC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-gray-100" lang="en">
      <body className="h-full">{children}</body>
    </html>
  );
}
