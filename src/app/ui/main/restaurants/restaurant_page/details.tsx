import React from 'react';

import {Restaurant} from '@/app/lib/definitions';

import {formatTime} from '@/app/lib/utils';

interface DetailsProps {
    restaurant: Restaurant;
}

const Details: React.FC<DetailsProps> = ({restaurant}) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <div className="border-[1px] rounded-md border-gray-500 p-4 w-1/3 h-fit">
            <p className="text-xl font-bold mb-2">
                Details
            </p>

            <div className="flex flex-row items-center font-medium">
                <p className="w-[90%]">{restaurant.address !== "" ? restaurant.address :
                    <em>No Address Provided</em>}</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"/>
                </svg>
            </div>

            <hr className="my-3 border-brandMetal"/>

            <div className="flex flex-row items-center font-medium">
                <p className="w-[90%]">{restaurant.phone !== "" ? restaurant.phone : <em>No Phone Provided</em>}</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                </svg>
            </div>

            <hr className="my-3 border-brandMetal"/>

            <div className="flex flex-row items-center font-medium">
                <p className="w-[90%]">
                    <div>
                        {restaurant.hours.map((day, index) => {
                            if (Array.isArray(day)) {
                                return (
                                    <p key={index} className="w-[90%] flex flex-row justify-between">
                                        <div>
                                            {days[index]}
                                        </div>
                                        <div>
                                            {formatTime(day[0])} - {formatTime(day[1])}
                                        </div>
                                    </p>
                                );
                            } else if (typeof day === "string" && day === "Open 24 hours") {
                                return (
                                    <p key={index} className="w-[80%] flex flex-row justify-between">
                                        <div>
                                            {days[index]}
                                        </div>
                                        <div>
                                            Open 24 hours
                                        </div>
                                    </p>
                                );
                            }
                        })}
                    </div>
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            </div>
        </div>
    );
}

export default Details;