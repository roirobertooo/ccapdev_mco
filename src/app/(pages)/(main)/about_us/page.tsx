// TODO: "About Us" Page (Check specs for more details)
import {Metadata} from 'next';

const metadata: Metadata = {
    title: "About Us"
};

function Page() {
    return (
        // Start here.
        <div className="w-2/3 mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-10">
                About Us
            </h1>
        </div>
    );
}

export {metadata};
export default Page;