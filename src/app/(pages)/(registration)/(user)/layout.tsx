import {Inter} from "next/font/google";

import "@/app/ui/globals.css";

const inter = Inter({subsets: ["latin"]});

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full bg-white">
        <body className="{inter.className} h-full">
        {children}
        </body>
        </html>
    );
}
