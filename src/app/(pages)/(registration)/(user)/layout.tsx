import React from 'react';
import {Inter} from 'next/font/google';

import '@/app/ui/globals.css';

const inter = Inter({subsets: ["latin"]});

function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full bg-white">
        <body className={`${inter.className} h-full`}>
            {children}
        </body>
        </html>
    );
}

export default Layout;