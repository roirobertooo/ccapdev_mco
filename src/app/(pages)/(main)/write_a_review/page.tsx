'use client';

import {useCookies} from 'next-client-cookies';

import Form from '@/app/ui/main/write_a_review/form';

function Page() {
    const userId = useCookies().get("currentUser");

    if (!userId) {
        return (
            <div className="w-2/3 mx-auto mt-10">
                <h1 className="font-bold text-2xl mb-10">
                    Please log in to write a review.
                </h1>
            </div>
        );
    }

    return (
        <div className="w-2/3 mx-auto mt-10">
            <h1 className="font-bold text-2xl mb-10">
                Write a Review
            </h1>

            <Form userId={userId}/>
        </div>
    );
}

export default Page;