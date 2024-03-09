'use client';

import React from 'react';
import {notFound} from 'next/navigation';

import {useFetchData} from '@/app/lib/utils';
import {Restaurant} from "@/app/lib/definitions";

import Loading from '@/app/ui/loading';
import Header from '@/app/ui/main/restaurants/restaurant_page/header';
import Details from '@/app/ui/main/restaurants/restaurant_page/details';
import Reviews from '@/app/ui/main/restaurants/restaurant_page/reviews';

function Page({params}: { params: { restaurant: string } }) {
    const fetchString = `/api/get?collectionName=restaurants&findKeys=_id&findValues=${params.restaurant}`;
    const [restaurantData, error] = useFetchData<Restaurant[]>(fetchString);
    const restaurant = restaurantData ? restaurantData[0] : null;

    if (error && restaurantData !== undefined && restaurantData !== null && restaurantData.length === 0) {
        notFound();
    }

    return (
        !restaurant ?
            <Loading/>
            :
            <div className="w-2/3 mx-auto mt-10">
                <Header restaurant={restaurant}/>

                <div className="flex justify-between">
                    <div className="w-1/2">
                        <div className="border-[1px] rounded-md border-gray-500 p-4 h-fit mb-20">
                            <p className="text-xl font-bold mb-2">
                                Description
                            </p>
                            <p>
                                {restaurant.description}
                            </p>
                        </div>

                        <Reviews restaurantId={restaurant._id}/>
                    </div>

                    <Details restaurant={restaurant}/>
                </div>
            </div>
    );
}

export default Page;