import AppProvider from "@/lib/AppProvider";
import AltAuthLayout from "@/lib/layout/auth/AltAuthLayout";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "be healthy auth",
  description: "account management [register,login,reset password] for be healthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AppProvider>
          <AltAuthLayout>
            {children}
          </AltAuthLayout>
        </AppProvider>
      </body>
    </html>
  );
}
