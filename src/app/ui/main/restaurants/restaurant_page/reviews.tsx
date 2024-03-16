import React, {useState, useEffect} from 'react';

import {useFetchData} from '@/app/lib/utils';
import {Review} from '@/app/lib/definitions';

import ReviewEntry from './review';

interface HeaderProps {
    restaurantId: string;
}

const Reviews: React.FC<HeaderProps> = ({restaurantId}) => {
    const [sort, setSort] = useState(["date", "desc"]);

    const fetchString = `/api/get?collectionName=reviews&findKeys=restaurant_id&findValues=${restaurantId}&sortKeys=${sort[0]}&sortOrders=${sort[1]}`;
    const [reviewsData, error] = useFetchData<Review[]>(fetchString);
    const [reviews, setReviews] = useState<Review[] | undefined>();

    useEffect(() => {
        if (reviewsData !== null) {
            setReviews(reviewsData);
        }
    }, [reviewsData]);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [option, order] = e.target.value.split("-");
        setSort([option, order]);
    };

    return (
        <div className="w-[110%]">
            <p className="text-2xl font-bold mb-5">Reviews</p>

            <div className="flex flex-row items-center gap-4 mb-6">
                <span className="font-bold">Sort: </span>
                <select onChange={handleSortChange}
                        className="font-medium rounded-md transition ease-linear duration-200 focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-brandBlue">
                    <option value="date-desc">
                        Latest
                    </option>
                    <option value="rating-desc">
                        Highest Rating
                    </option>
                    <option value="likes_count-desc">
                        Most Liked
                    </option>
                </select>
            </div>

            <div className="mb-20">
                {reviews?.map(review => (
                    <ReviewEntry key={review._id} review={review}/>
                ))}
            </div>
        </div>
    );
}

export default Reviews;