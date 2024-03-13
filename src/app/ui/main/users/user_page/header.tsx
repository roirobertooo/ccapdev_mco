import {useState} from 'react';
import Link from 'next/link';

import {useFetchData} from '@/app/lib/utils';
import {Restaurant, UserAccount} from '@/app/lib/definitions';

function Header({user}: { user: UserAccount }) {
    const fetchString = `/api/get?collectionName=restaurants&findKeys=_id&findValues=${user.restaurant_owned}`;
    const [restaurantData, error] = useFetchData<Restaurant[]>(fetchString);
    const restaurant = restaurantData ? restaurantData[0] : null;

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <img src={user.avatar_url} alt="avatar"
                     className="w-20 h-20 rounded-full border-2 border-gray-400 unselectable"/>

                <div className="ml-4">
                    <p className="flex flex-row items-center gap-3">
                        <span className="text-2xl font-bold">{user.name}</span>
                        {user.is_business && restaurant &&
                            <div className="flex flex-row items-center">
                                <Link href={`/restaurants/${restaurant._id}`}
                                      onMouseEnter={() => setIsModalOpen(true)}
                                      onMouseLeave={() => setIsModalOpen(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"/>
                                    </svg>
                                </Link>
                                <div className="ml-3">
                                    {isModalOpen && (
                                        <div
                                            className="flex flex-row items-center gap-1 z-10 border absolute bg-white p-1.5 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                                            </svg>
                                            <div className="unselectable">
                                                This user owns <span className="font-medium">{restaurant.name}</span>.
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        }
                    </p>
                    <p className="mt-1 text-lg">@{user.username}</p>
                </div>
            </div>

            <div className="flex justify-between mt-7">
                <div className="w-full">
                    <div className="border-[1px] rounded-md border-gray-500 p-4 h-fit mb-20">
                        <p className="text-xl font-bold mb-2">
                            Description
                        </p>
                        <p>
                            {user.description === "" ? <em>No description.</em> : user.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;