import Link from 'next/link';
import Image from 'next/image';

import {formatDateToLocal, TruncateText, useFetchData} from '@/app/lib/utils';
import {Restaurant, Review, UserAccount} from '@/app/lib/definitions';

import Rating from '@/app/ui/components/general/rating';
import ReviewFooter from '@/app/ui/components/general/review-footer';

function ReviewHeader({review}: { review: Review }) {
    const reviewerFetchString = `/api/get?collectionName=user_accounts&findKeys=_id&findValues=${review.user_id}`;
    const [reviewerData, reviewerError] = useFetchData<UserAccount[]>(reviewerFetchString);
    const reviewer = reviewerData ? reviewerData[0] : null;

    const restaurantFetchString = `/api/get?collectionName=restaurants&findKeys=_id&findValues=${review.restaurant_id}`;
    const [restaurantData, restaurantError] = useFetchData<Restaurant[]>(restaurantFetchString);
    const restaurant = restaurantData ? restaurantData[0] : null;

    if (!reviewer) return null;

    return (
        <div className="flex flex-row px-6 pt-6 items-center justify-between">
            <div className="flex flex-row gap-3 items-center">
                <Link href={"#"}>
                    <Image src={reviewer.avatar_url} alt="" width={50} height={50}
                           className="rounded-full border border-1 unselectable"/>
                </Link>

                <div className="flex flex-col align-middle font-medium mb-2">
                    <Link href={"#"}
                          className="hover:underline">
                        {reviewer.name}
                    </Link>

                    <div className="text-sm pt-1">
                        {formatDateToLocal(review.date)}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <Rating rating={review.rating} includeNumber={false} count={-1}/>

                <Link href={"#"}
                      className="mt-1.5 hover:underline text-blue-700 font-medium mr-1.5">
                    {restaurant && restaurant.name}
                </Link>
            </div>
        </div>
    );
}

function ReviewBody({review}: { review: Review }) {
    return (
        <div className="px-6 pt-4 mb-1">
            <div className="font-bold text-xl">
                {review.review_title}
            </div>

            <p className="text-gray-700 text-base mt-3">
                <TruncateText text={review.review_body} maxChar={100} includeQuotes={true}/>
            </p>
        </div>
    );
}

function ReviewCard({review}: { review: Review }) {
    if (!review) return null;

    return (
        <div className="flex flex-col justify-between w-full h-80 rounded overflow-hidden shadow-lg m-4 border-2">
            <div>
                <ReviewHeader review={review}/>
                <ReviewBody review={review}/>
            </div>

            <ReviewFooter review={review} classOpts={"px-6 pt-4 pb-3.5"}/>
        </div>
    );
}

export default ReviewCard;