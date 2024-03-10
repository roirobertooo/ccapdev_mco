import React from 'react';

interface AvailabilityFilterProps {
    handleFilterChange: (e: React.MouseEvent<HTMLInputElement>) => void;
}

function AvailabilityFilter({handleFilterChange}: AvailabilityFilterProps) {
    return (
        <div>
            <div className="font-medium mb-1">
                Availability
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex items-center">
                    <input type="radio" id="open" name="availability" value="open"
                           className="focus:ring-offset-1"
                           onClick={handleFilterChange}/>
                    <label htmlFor="open" className="ml-1">
                        Open
                    </label>
                </div>

                <div className="flex items-center">
                    <input type="radio" id="closed" name="availability" value="closed"
                           className="focus:ring-offset-1"
                           onClick={handleFilterChange}/>
                    <label htmlFor="closed" className="ml-1">
                        Closed
                    </label>
                </div>

                <div className="flex items-center">
                    <input type="radio" id="both" name="availability" value="both"
                           className="focus:ring-offset-1"
                           onClick={handleFilterChange}/>
                    <label htmlFor="both" className="ml-1">
                        Both
                    </label>
                </div>
            </div>
        </div>
    );
}

export default AvailabilityFilter;