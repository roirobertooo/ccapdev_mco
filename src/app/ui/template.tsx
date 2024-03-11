import React from 'react';
import {cookies} from 'next/headers';
import {Inter} from 'next/font/google';

import './globals.css';
import Navbar from '@/app/ui/components/navbar/navbar';

const inter = Inter({subsets: ["latin"]});

function Template({children}: Readonly<{ children: React.ReactNode }>) {
    const user = cookies().get("currentUser")?.value || null;

    return (
        <html lang="en">
        <body className={inter.className}>
            <Navbar currentUser={user}/>

            {children}
        </body>
        </html>
    );
}

export default Template;