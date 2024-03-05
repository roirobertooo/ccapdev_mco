import React, {useState} from 'react';

import {useFetchData} from "../../../lib/utils";

import ReviewRow from "./review-row";
import {Review} from "../../../lib/definitions";

export default function ReviewListing() {
    const fetchString = `/api/get?collectionName=reviews&sortKeys=date&sortOrders=desc`;
    const reviews = useFetchData<Review[]>(fetchString);

    const [displayCount, setDisplayCount] = useState(3); // Display 3 reviews initially
    const reviewsToDisplay = reviews?.slice(0, displayCount);

    const loadMore = () => {
        setDisplayCount(displayCount + 6); // Increase the display count by 3 reviews each time "Load More" is clicked
    };

    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="font-bold text-2xl my-12">
                Recent Activity
            </h1>

            {reviews && reviewsToDisplay ?
                <div className="flex flex-col items-center justify-center">
                    <ReviewRow reviews={reviewsToDisplay} maxDisplay={displayCount}/>

                    {displayCount < reviews?.length &&
                        <button onClick={loadMore}
                                className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ease-linear duration-100">
                            Load More
                        </button>
                    }
                </div>
                :
                <div className="italic">Recent reviews can be seen here.</div>
            }
        </div>
    );
}
