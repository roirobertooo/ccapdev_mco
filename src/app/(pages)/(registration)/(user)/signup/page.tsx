import React from 'react';
import Image from 'next/image';
import {CookiesProvider} from 'next-client-cookies/server';

import UserForm from '@/app/ui/components/general/user-form';

function Page() {
    return (
        <div className="relative flex justify-center h-full overflow-hidden lg:px-0 md:px-12">
            <div
                className="relative z-10 flex flex-col flex-1 py-10 bg-white shadow-2xl md:flex-none md:px-28 sm:justify-center">
                <div className="mt-20 w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                    <div className="-ml-9 flex flex-col pb-3">
                        <h2 className="text-4xl font-medium text-gray-900">
                            Start sharing your dining experiences.
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <CookiesProvider>
                            <UserForm requireAll={true}/>
                        </CookiesProvider>
                    </div>
                </div>
            </div>

            <div className="hidden bg-white lg:block lg:flex-1 lg:relative sm:contents">
                <div className="absolute inset-0 w-full h-full bg-white">
                    <Image className="object-center object-cover h-full bg-gray-200"
                           src="/signup/cover.png"
                           alt="" width="1310" height="873"/>
                </div>
            </div>
        </div>
    )
}

export default Page;