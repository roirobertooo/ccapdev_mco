import {cookies} from 'next/headers';
import {notFound} from 'next/navigation';

import UserForm from '@/app/ui/main/users/UserForm';

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

            <UserForm userId={user}/>
        </div>
    );
}

export default Page;