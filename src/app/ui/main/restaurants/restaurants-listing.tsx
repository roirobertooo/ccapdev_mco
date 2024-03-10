'use client';
import React, {useState, useEffect} from 'react';

import {useFetchData} from '@/app/lib/utils';
import {Restaurant} from '@/app/lib/definitions';

import RestaurantItem from './restaurant-item';
import isRestaurantOpen from './isRestauranOpen';
import AvailabilityFilter from './filters/availability';
import RatingFilter from './filters/rating';

interface ContainsFilterProps {
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ContainsFilter({handleFilterChange}: ContainsFilterProps) {
    return (
        <div className="flex flex-row gap-2 mt-5">
            <div className="flex items-center">
                <label htmlFor="contains" className="mr-1 font-medium">Contains:</label>
                <input type="text" id="contains" name="contains"
                       className="focus:ring-offset-0 h-8 rounded-md border border-gray-300 px-2"
                       onChange={handleFilterChange}/>
            </div>
        </div>
    );
}

function RestaurantsListing() {
    const [sort, setSort] = useState(["name", "asc"]);
    const [filters, setFilters] = useState(new Map());

    const fetchString = `/api/get?collectionName=restaurants&sortKeys=${sort[0]}&sortOrders=${sort[1]}`;
    const [restaurantsData, error] = useFetchData<Restaurant[]>(fetchString);
    const [restaurants, setRestaurants] = useState<Restaurant[] | undefined>();

    useEffect(() => {
        if (restaurantsData !== null) {
            const filteredRestaurants = restaurantsData.filter(restaurant => {
                let availability, rating, contains;

                if (filters.has("availability")) {
                    const currentDay = (new Date().getDay() + 6) % 7; // Monday at index 0 in DB

                    const currentDayHours = restaurant.hours[currentDay];
                    const isOpen24Hours = typeof currentDayHours === "string" && currentDayHours === "Open 24 hours";

                    const AvailabilityFilter = isRestaurantOpen(restaurant.hours);

                    console.log(restaurant.name, AvailabilityFilter);

                    if (filters.get("availability") === "open" && !AvailabilityFilter && !isOpen24Hours) {
                        availability = false;
                    } else availability = !(filters.get("availability") === "closed" && (AvailabilityFilter || isOpen24Hours));
                }

                if (filters.has("rating")) {
                    rating = restaurant.review_average >= (filters.get("rating") || 0);
                }

                if (filters.has("contains")) {
                    contains = restaurant.name.toLowerCase().includes(filters.get("contains").toLowerCase()) ||
                        restaurant.description.toLowerCase().includes(filters.get("contains").toLowerCase());
                }

                return availability !== false && rating !== false && contains !== false;
            });
            setRestaurants([...filteredRestaurants]);
        }
    }, [filters, restaurantsData]);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [option, order] = e.target.value.split("-");
        setSort([option, order]);
    };

    const handleFilterChange = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (target.value === filters.get(target.name)) {
            target.checked = false;

            setFilters((prev) => {
                prev.delete(target.name);
                return new Map(prev);
            });
        } else {
            target.checked = true;

            setFilters((prev) => {
                if (target.value === "both") {
                    prev.delete(target.name);
                } else {
                    prev.set(target.name, target.value);
                }
                return new Map(prev);
            });
        }
    }

    const handleContainsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters((prev) => {
            prev.set("contains", e.target.value);
            return new Map(prev);
        });
    }

    const handleClearFilters = () => {
        setFilters(new Map());

        const inputs = document.querySelectorAll('input[type="radio"], input[type="text"]');

        inputs.forEach((input) => {
            if ((input as HTMLInputElement).type === "radio") {
                (input as HTMLInputElement).checked = false;
            } else if ((input as HTMLInputElement).type === "text") {
                (input as HTMLInputElement).value = "";
            }
        });
    }

    return (
        <div className="flex flex-row gap-[150px]">
            <div>
                {restaurants && restaurants.length > 0 ?
                    restaurants.map((restaurant, index) => (
                        <RestaurantItem key={index} index={index + 1} restaurant={restaurant}/>))
                    :
                    <div className="italic w-[670px] h-[550px]">There are no available restaurants.</div>}
            </div>

            <div className="border border-gray-300 p-5 rounded-xl h-fit">
                <div className="flex flex-row items-center gap-4">
                    <span className="font-bold">
                        Sort:
                    </span>
                    <select onChange={handleSortChange}
                            className="font-medium rounded-md transition ease-linear duration-200 focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-brandBlue">
                        <option value="name-asc">
                            Alphabetically
                        </option>
                        <option value="review_average-desc">
                            Highest Rated
                        </option>
                        <option value="review_count-desc">
                            Most Rated
                        </option>
                    </select>
                </div>

                <hr className="mt-5 border-brandMetal"></hr>

                <div className="mt-5">
                    <div className="flex flex-row font-bold mb-2 items-center">
                        <div>
                            Filter:
                        </div>
                        <div className="ml-auto">
                            <button onClick={handleClearFilters}
                                    className="text-sm rounded text-brandBlue hover:underline">
                                Clear Filters
                            </button>
                        </div>
                    </div>

                    <AvailabilityFilter handleFilterChange={handleFilterChange}/>

                    <RatingFilter handleFilterChange={handleFilterChange}/>

                    <ContainsFilter handleFilterChange={handleContainsChange}/>
                </div>
            </div>
        </div>
    );
}

export default RestaurantsListing;