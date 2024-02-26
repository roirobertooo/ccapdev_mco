import React from 'react';

import {Restaurant} from '../../../lib/definitions';

import Rating from '../../rating';

type RestaurantCardProps = {
    restaurant: Restaurant
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({restaurant}) => {
    return (
        // change to `/restaurants/${restaurant._id}`
        <a href={'#'}>
            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="image-container h-1/4 overflow-hidden">
                    <img className="rounded-t-lg" src={restaurant.cover_url} alt=""/>
                </div>

                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {restaurant.name}
                    </h5>

                    <Rating rating={restaurant.review_average}/>

                    <p className="mt-2 font-normal text-sm">
                        {restaurant.address.split(',')[0]}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default RestaurantCard