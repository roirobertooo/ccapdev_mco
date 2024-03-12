import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

import {useFetchData, TruncateText, formatDateToLocal} from '@/app/lib/utils';
import {UserAccount, Review, Comment} from '@/app/lib/definitions';

import Rating from '@/app/ui/components/general/rating';
import ReviewFooter from '@/app/ui/components/general/review-footer';
import CommentSection from './comment-section';

interface ReviewProps {
    review: Review;
}

interface HeaderProps {
    review: Review;
    user: UserAccount;
}

function Header({review, user}: HeaderProps) {
    return (
        <div className="flex flex-row gap-3 items-center justify-between">
            <div className="flex flex-row gap-3 items-center">
                <Link href={`/users/${user._id}`}>
                    <Image src={user.avatar_url} alt="" width={50} height={50}
                           className="rounded-full border border-1 unselectable"/>
                </Link>

                <div className="flex flex-col align-middle font-medium mb-2">
                    <Link href={`/users/${user._id}`}
                          className="hover:underline">
                        {user.name}
                    </Link>

                    <div className="text-sm pt-1">
                        <Rating rating={review.rating} includeNumber={false} count={-1}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end">
                {formatDateToLocal(review.date)}
            </div>
        </div>
    );
}

function ReviewBody({review}: { review: Review }) {
    const router = usePathname();
    const isRestaurantRoute = router?.startsWith("/restaurants");

    return (
        <div className="px-2 pt-4 mb-1">
            {!isRestaurantRoute ? (
                <Link href={`/restaurants/${review.restaurant_id}#${review._id}`}>
                    <p className="font-bold text-xl mb-2 hover:underline cursor-pointer">
                        {review.review_title}
                    </p>
                </Link>
            ) : (
                <p className="font-bold text-xl mb-2">
                    {review.review_title}
                </p>
            )}

            <p className="pt-1">
                <TruncateText text={review.review_body} maxChar={100} includeQuotes={false}/>
            </p>
        </div>
    );
}

const Review: React.FC<ReviewProps> = ({review}) => {
    const userFetchString = `/api/get?collectionName=user_accounts&findKeys=_id&findValues=${review.user_id}`;
    const [userData, error] = useFetchData<UserAccount[]>(userFetchString);
    const user = userData ? userData[0] : null;

    const commentsFetchString = `/api/get?collectionName=comments&findKeys=review_id&findValues=${review._id}&sortKeys=date&sortOrders=desc`;
    const [comments, commentsError] = useFetchData<Comment[]>(commentsFetchString);

    return (
        <div className="border-[1px] rounded-md mb-2 p-5"
             id={review._id}>
            {user ? (
                <>
                    <Header review={review} user={user}/>

                    <ReviewBody review={review}/>

                    <ReviewFooter review={review} classOpts={"pt-4"}/>

                    {comments && comments.length > 0 &&
                        <>
                            <hr className="mt-5 border-gray-400"/>
                            <h1 className="font-bold underline underline-offset-2 mt-4">
                                Response{comments.length > 1 ? "s" : ""} from the owner
                            </h1>

                            {comments.map((comment, index) => (
                                <div key={index}>
                                    <CommentSection comment={comment}/>
                                </div>
                            ))}
                        </>
                    }
                </>
            ) : (
                <p>Review loading...</p>
            )}
        </div>
    );
}

export default Review;