import React from 'react';
import {Inter} from 'next/font/google';
import {CookiesProvider} from 'next-client-cookies/server';

import './globals.css';
import Navbar from '@/app/ui/components/navbar/navbar';

const inter = Inter({subsets: ["latin"]});

function Template({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <CookiesProvider>
                <Navbar/>
            </CookiesProvider>

            {children}
        </body>
        </html>
    );
}

export default Template;