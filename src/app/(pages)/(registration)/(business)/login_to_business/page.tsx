// TODO: "Login To Business" Page

import {Metadata} from 'next';
import {notFound} from 'next/navigation';

const metadata: Metadata = {
    title: "Login To Business"
};

function Page() {
    return (
        notFound()
    );
}

export {metadata};
export default Page;