import Link from 'next/link';

import {Restaurant} from '@/app/lib/definitions';

import Rating from '@/app/ui/components/general/rating';
import RestaurantStatus from './restaurant-status';
import LatestReview from './latest-review';

function RestaurantItem({index, restaurant}: { index: number, restaurant: Restaurant }) {
    return (
        <Link href={`/restaurants/${restaurant._id}`}
              className="mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 light:border-gray-100 light:bg-gray-200 light:hover:bg-gray-100 transition ease-linear duration-200">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                 src={restaurant.cover_url} alt=""/>

            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 light:text-brandMetal">
                    {index}. {restaurant.name}
                </h5>

                <Rating rating={restaurant.review_average} includeNumber={true} count={restaurant.review_count}/>

                <div className="mt-2"></div>

                <RestaurantStatus hours={restaurant.hours}/>

                <LatestReview restaurant={restaurant}/>
            </div>
        </Link>
    );
}

export default RestaurantItem;