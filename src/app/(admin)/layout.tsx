import AppProvider from "@/lib/AppProvider";
import ManagementLayout from "@/lib/layout/management/ManagementLayout";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "be healthy admin application",
    description: "welcome back admin tou your be-healthy management dashboard ",
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
                    <ManagementLayout>
                        {children}
                    </ManagementLayout>
                </AppProvider>
            </body>
        </html>
    );
}
