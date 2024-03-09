import React from 'react';

import '@/app/ui/globals.css';
import Template from '@/app/ui/template';

function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Template>
            {children}
        </Template>
    );
}

export default Layout;