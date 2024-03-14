'use client';

import Form from '@/app/ui/main/write_a_review/form';

function Page() {
    return (
        <div className="w-2/3 mx-auto mt-10">
            <h1 className="font-bold text-2xl mb-10">
                Write a Review
            </h1>

            <Form/>
        </div>
    );
}

export default Page;