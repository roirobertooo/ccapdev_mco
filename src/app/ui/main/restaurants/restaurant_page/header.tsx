import React from 'react';

import {Restaurant} from '@/app/lib/definitions';

import Rating from '@/app/ui/components/general/rating';
import RestaurantStatus from '@/app/ui/main/restaurants/restaurant-status';

interface HeaderProps {
    restaurant: Restaurant;
}

const Header: React.FC<HeaderProps> = ({restaurant}) => {
    return (
        <>
            <div className="mb-10">
                <img src={restaurant.cover_url} alt={restaurant.name}
                     className="w-full h-40 object-cover overflow:hidden filter blur-[2px]"/>
            </div>

            <h1 className="font-bold text-3xl mb-3">
                {restaurant.name}
            </h1>

            <div className="border-[1px] border-gray-400 rounded-md w-fit p-2 mb-3">
                <Rating rating={restaurant.review_average} includeNumber={true} count={restaurant.review_count}/>
            </div>

            <div className="font-bold text-[17px] mb-7">
                <RestaurantStatus hours={restaurant.hours}/>
            </div>
        </>
    );
}

export default Header;