// TODO: "About Us" Page (Check specs for more details)

import {Metadata} from 'next';
import {notFound} from 'next/navigation';

const metadata: Metadata = {
    title: "About Us"
};

function Page() {
    return (
        // Start here.
        notFound()
    );
}

export {metadata};
export default Page;