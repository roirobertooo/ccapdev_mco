// TODO: "Add a Business" Page

import {Metadata} from 'next';
import {notFound} from 'next/navigation';

const metadata: Metadata = {
    title: "Add a Business"
};

function Page() {
    return (
        notFound()
    );
}

export {metadata};
export default Page;