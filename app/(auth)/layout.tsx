import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "CES POC",
  description: "CES POC",
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
