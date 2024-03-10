import React from 'react';

import {Review} from '@/app/lib/definitions';

import ReviewCard from './review-card';

type ReviewRowProps = {
    reviews: Review[]
    maxDisplay: number
}

const ReviewRow: React.FC<ReviewRowProps> = (props) => {
    const {reviews, maxDisplay} = props;

    const reviewsToDisplay = reviews.slice(0, maxDisplay);

    return (
        <div
            className="flex flex-wrap items-center justify-between w-5/6">
            {reviewsToDisplay.map((review, index) => (
                <div key={index} className="flex flex-wrap w-2/6 items-center justify-center">
                    <ReviewCard review={review}/>
                </div>
            ))}
        </div>
    );
}

export default ReviewRow;