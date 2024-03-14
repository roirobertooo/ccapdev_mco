import React from 'react';
import {useCookies} from 'next-client-cookies';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

import {formatDateToLocal, TruncateText, useFetchData} from '@/app/lib/utils';
import {Comment, Review, UserAccount} from '@/app/lib/definitions';

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
    const userLoggedIn = useCookies().get("currentUser");

    const router = usePathname();
    const ownProfile = router?.startsWith("/users") && (userLoggedIn === user._id);

    return (
        <div className="flex flex-row gap-3 items-center justify-between">
            <div className="flex flex-row gap-3 items-center">
                <Link href={`/users/${user._id}`}>
                    <Image src={user.avatar_url} alt="" width={50} height={50}
                           className="rounded-full border border-1 unselectable"/>
                </Link>

                <div className="flex flex-col align-middle font-medium mb-2">
                    <div>
                        <Link href={`/users/${user._id}`}
                              className="hover:underline">
                            {user.name}
                        </Link>

                        {review.edited && <span className="ml-2 font-normal">(edited)</span>}
                    </div>

                    <div className="text-sm pt-1">
                        <Rating rating={review.rating} includeNumber={false} count={-1}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end">
                {ownProfile &&
                    <div className="flex flex-row gap-3 mb-1">
                        <button className="text-sm font-medium hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="w-[22px] h-[22px]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                            </svg>
                        </button>
                        <button className="text-sm font-medium hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-[22px] h-[22px]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                            </svg>
                        </button>
                    </div>
                }
                {formatDateToLocal(review.date)}
            </div>
        </div>
    )
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