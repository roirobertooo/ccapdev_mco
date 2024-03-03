import React from "react";

import {useFetchData} from "../../lib/utils";

import {EmblaOptionsType} from 'embla-carousel';
import EmblaCarousel from '../interactivity/carousel/carousel';
import '../interactivity/carousel/css/embla.css';

import {Restaurant} from "../../lib/definitions";

export default function RestaurantListing() {
    const fetchString = `/api/restaurant/getAll?sortKey=name&sortOrder=asc`;
    const restaurants = useFetchData<Restaurant[]>(fetchString);

    const OPTIONS: EmblaOptionsType = {align: 'end', slidesToScroll: 'auto', loop: true};

    return (
        <div className="mt-10">
            <h2 className="font-bold text-3xl mb-7">
                Restaurants
            </h2>

            {restaurants ?
                <EmblaCarousel slides={restaurants} options={OPTIONS}/> :
                <div className="italic">There are no available restaurants.</div>
            }
        </div>
    );
}
