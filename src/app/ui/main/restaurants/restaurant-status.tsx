import React from 'react';

import {formatTime} from '@/app/lib/utils';

import isRestaurantOpen from './isRestauranOpen';

type RestaurantStatusProps = {
    hours: (string | string[])[]
}

const RestaurantStatus: React.FC<RestaurantStatusProps> = ({hours}) => {
    const currentDay = (new Date().getDay() + 6) % 7; // Monday at index 0 in DB
    const isOpen24Hours = typeof hours[currentDay] === "string" && hours[currentDay] === "Open 24 hours";

    const openStatus = isRestaurantOpen(hours);

    return (
        <div>
            <span className={(openStatus || isOpen24Hours) ? "text-green-500" : "text-red-500"}>
                {(openStatus || isOpen24Hours) ? "Open" : "Closed"}
            </span>
            <span>
                {isOpen24Hours ? " 24 hours" : (openStatus ? ` until ${formatTime(Array.isArray(hours[currentDay]) ? hours[currentDay][1] : '')}` : ` until ${formatTime(Array.isArray(hours[(currentDay + 1) % 7]) ? hours[(currentDay + 1) % 7][0] : '')}`)}
            </span>
        </div>
    );
}

export default RestaurantStatus;