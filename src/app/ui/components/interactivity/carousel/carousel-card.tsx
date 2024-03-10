import React from 'react';
import Link from 'next/link';

import {Restaurant} from '@/app/lib/definitions';

import Rating from '@/app/ui/components/general/rating';

type RestaurantCardProps = {
    restaurant: Restaurant
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({restaurant}) => {
    return (
        <Link href={`/restaurants/${restaurant._id}`}>
            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="image-container h-1/4 overflow-hidden">
                    <img className="rounded-t-lg" src={restaurant.cover_url} alt=""/>
                </div>

                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {restaurant.name}
                    </h5>

                    <Rating rating={restaurant.review_average} includeNumber={true} count={-1}/>

                    <p className="mt-2 font-normal text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {restaurant.address.split(",")[0]}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard;