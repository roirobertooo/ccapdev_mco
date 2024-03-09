import React from 'react';

import '@/app/ui/globals.css';
import Template from '@/app/ui/template';

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Template>
            {children}
        </Template>
    );
}
