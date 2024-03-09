import {Metadata} from 'next';

import RestaurantsListing from '@/app/ui/main/restaurants/restaurants-listing';

const metadata: Metadata = {
    title: "Restaurants Listing"
};

export default function Page() {
    return (
        <div className="w-2/3 mx-auto mt-10">
            <h1 className="font-bold text-3xl mb-10">
                All Restaurants
            </h1>

            <RestaurantsListing/>
        </div>
    );
}

export {metadata};