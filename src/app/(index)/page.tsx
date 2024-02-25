// TODO: Main page to be done by Roi.
'use client';
import React from 'react';

import SearchForm from "@/app/ui/home/search-form";
import RestaurantListing from "@/app/ui/home/restaurants-listing";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold text-center my-5">Taste, Discover, Chow?</h1>
            <h2 className="text-xl text-center my-2 mb-7">Find the best restaurants and food places in DLSU</h2>

            <SearchForm/>

            <RestaurantListing/>
        </main>
    );
}
