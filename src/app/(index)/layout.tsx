import "@/app/ui/globals.css";

import {Metadata} from "next";
import Template from "../ui/template";

export const metadata: Metadata = {
  title: "Chow: Your Refined Guide to Campus Gastronomy"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Template>
            {children}
        </Template>
    );
}
