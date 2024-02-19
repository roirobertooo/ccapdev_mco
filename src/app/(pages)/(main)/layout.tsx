import "@/app/ui/globals.css";

import Template from "../../ui/template";

export default function Layout({
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
