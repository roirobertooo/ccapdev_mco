'use client';

import React from 'react';
import {notFound} from 'next/navigation';

import {useFetchData} from '@/app/lib/utils';
import {UserAccount, Review} from '@/app/lib/definitions';

import Loading from '@/app/ui/loading';
import Header from '@/app/ui/main/users/user_page/header';
import ReviewEntry from '@/app/ui/main/restaurants/restaurant_page/review';

function Page({params}: { params: { user: string } }) {
    const userFetchString = `/api/get?collectionName=user_accounts&findKeys=_id&findValues=${params.user}`;
    const [userData, userError] = useFetchData<UserAccount[]>(userFetchString);
    const user = userData ? userData[0] : null;

    if (userData !== undefined && userData !== null && userData.length === 0) {
        notFound();
    }

    const reviewFetchString = `/api/get?collectionName=reviews&findKeys=user_id&findValues=${params.user}&sortKeys=date&sortOrders=desc`;
    const [reviewsData, reviewsError] = useFetchData<Review[]>(reviewFetchString);

    const establishmentFetchString = `/api/get?collectionName=reviews&findKeys=restaurant_id&findValues=${user && user.restaurant_owned}&sortKeys=date&sortOrders=desc`;
    const [establishmentData, establishmentError] = useFetchData<Review[]>(establishmentFetchString);

    return (
        !user ?
            <Loading/>
            :
            <div className="flex flex-row w-2/3 mx-auto mt-20 gap-40 mb-20">
                <div className="w-1/2 mx-auto">
                    <Header user={user}/>

                    {user.is_business ?
                        <div className="-mt-5 rounded-md border-gray-500">
                            <p className="text-xl font-bold mb-5">
                                Establishment Reviews
                            </p>

                            {establishmentData && establishmentData.length === 0 ?
                                <div className="w-full">
                                    <p className="text-center w-full text-md font-medium italic border-[1px] p-4 rounded-md border-gray-500">
                                        No reviews written yet.
                                    </p>
                                </div>
                                :
                                establishmentData?.map(review => (
                                    <ReviewEntry key={review._id} review={review}/>
                                ))
                            }
                        </div>
                        : <></>
                    }
                </div>
                <div className="flex flex-col items-center w-1/2 mx-auto pt-5 mb-20">
                    {reviewsData && reviewsData.length === 0 ?
                        <div className="w-2/3">
                            <p className="text-center w-full text-md font-medium italic mb-5 border-[1px] p-4 rounded-md border-gray-500">
                                No reviews yet.
                            </p>
                        </div>
                        : <></>
                    }

                    {reviewsData?.map(review => (
                        <ReviewEntry key={review._id} review={review}/>
                    ))}
                </div>
            </div>
    );
}

export default Page;