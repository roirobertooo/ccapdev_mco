import {cookies} from 'next/headers';
import {notFound} from 'next/navigation';
import {CookiesProvider} from 'next-client-cookies/server';

import UserForm from '@/app/ui/components/general/user-form';

function Page({params}: { params: { user: string } }) {
    const user = cookies().get("currentUser")?.value || null;

    if (params.user !== user) {
        notFound();
    }

    return (
        <div className="w-2/3 mx-auto mt-10">
            <h1 className="font-bold text-3xl mb-10">
                Settings
            </h1>

            <CookiesProvider>
                <UserForm requireAll={false}/>
            </CookiesProvider>
        </div>
    );
}

export default Page;