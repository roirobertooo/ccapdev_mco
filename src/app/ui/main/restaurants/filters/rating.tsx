import React from 'react';

import Rating from '@/app/ui/components/general/rating';

interface RatingFilterProps {
    handleFilterChange: (e: React.MouseEvent<HTMLInputElement>) => void;
}

function RatingFilter({handleFilterChange}: RatingFilterProps) {
    return (
        <div>
            <div className="mt-3 font-medium">
                Rating
            </div>

            <div className="">
                {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center mt-2">
                        <input
                            type="radio"
                            id={`star-${rating}`}
                            name="rating"
                            value={rating}
                            onClick={handleFilterChange}
                            className="focus:ring-offset-1"
                        />
                        <label htmlFor={`star-${rating}`} className="ml-2 flex flex-row">
                            <Rating rating={rating} includeNumber={false} count={-1}/>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RatingFilter;