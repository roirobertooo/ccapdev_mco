import {useEffect, useState} from 'react';

import {EmblaOptionsType} from 'embla-carousel';
import EmblaCarousel from '../interactivity/carousel/carousel';
import '../interactivity/carousel/css/embla.css';

import {Restaurant} from "../../lib/definitions";

export default function RestaurantListing() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/restaurant/getAll?sortKey=name&sortOrder=asc`);
            const data = await response.json();

            setRestaurants(data);
        };

        fetchData().then(
            () => console.log('Fetched all restaurants'),
            (error) => console.error('Error fetching all restaurants', error)
        );
    }, []);

    const OPTIONS: EmblaOptionsType = {align: 'end', slidesToScroll: 'auto', loop: true};

    return (
        <div className="mt-10">
            <h2 className="font-bold text-3xl mb-7">
                Restaurants
            </h2>

            <EmblaCarousel slides={restaurants} options={OPTIONS}/>
        </div>
    );
}
