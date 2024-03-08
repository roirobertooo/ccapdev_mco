import React from 'react';
import {Inter} from 'next/font/google';

import './globals.css';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

const inter = Inter({subsets: ["latin"]});

export default function Template({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>

        {children}

        <Footer/>
        </body>
        </html>
    );
}
