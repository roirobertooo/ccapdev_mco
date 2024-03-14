// TODO: "Claim a Business" Page

import {Metadata} from 'next';
import {notFound} from 'next/navigation';

const metadata: Metadata = {
    title: "Claim a Business"
};

function Page() {
    return (
        notFound()
    );
}

export {metadata};
export default Page;