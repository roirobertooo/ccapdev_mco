import React from 'react';
import {Metadata} from 'next';

import '@/app/ui/globals.css';
import Template from '@/app/ui/template';

export const metadata: Metadata = {
    title: "Chow: Your Refined Guide to Campus Gastronomy"
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Template>
            {children}
        </Template>
    );
}
