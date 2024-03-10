'use client';

import React from 'react';

import SearchForm from '@/app/ui/index/search-form';
import RestaurantsListing from '@/app/ui/index/restaurants-listing';
import ReviewsListing from '@/app/ui/index/reviews-listing/reviews-listing';

function Home() {
    return (
        <main className="flex flex-col justify-between items-center">
            <h1 className="text-4xl font-bold text-center my-5">
                Taste, Discover, Chow?
            </h1>
            <h2 className="text-xl text-center my-2 mb-7">
                Find the best restaurants and food places in DLSU
            </h2>

            <SearchForm/>

            <RestaurantsListing/>

            <hr className="border-[1px] w-4/5 mt-16"/>

            <ReviewsListing/>

            <div className="my-10"></div>
        </main>
    );
}

export default Home;