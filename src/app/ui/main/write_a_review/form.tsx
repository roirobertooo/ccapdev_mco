import React, {useState} from 'react';

import {putData, useFetchData} from '@/app/lib/utils';
import {Restaurant} from '@/app/lib/definitions';

import Loading from '@/app/ui/loading';

function Form({userId}: { userId: string }) {
    const [restaurant, setRestaurant] = useState("");
    const [rating, setRating] = useState(5);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [images, setImages] = useState<FileList | null>(null);

    const fetchString = "/api/get?collectionName=restaurants&sortKeys=name&sortOrders=asc";
    const [restaurants, error] = useFetchData<Restaurant[]>(fetchString);

    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 based, so +1 and pad with 0
    const day = ("0" + date.getDate()).slice(-2); // Pad with 0
    const formattedDate = `${year}-${month}-${day}`;

    if (!restaurants) {
        return <Loading/>;
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImages(e.target.files);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!restaurant) {
            alert("Please select a restaurant.");
            return;
        }

        // TODO: Add image upload functionality
        // if (images) {
        //     for (let i = 0; i < images.length; i++) {
        //         formData.append('images', images[i]);
        //     }
        // }

        putData(`/api/put?collectionName=reviews&putKeys=user_id,restaurant_id,rating,date,review_title,review_body&putValues=${userId},${restaurant},${rating},${formattedDate},${title},${body}`);

        alert("Success! Your review has been posted!");

        location.reload();
    }

    return (
        <form onSubmit={handleSubmit}
              className="flex flex-col w-1/2">
            <div className="flex flex-row gap-5 items-center mb-10">
                <label className="block font-medium text-gray-600"
                       htmlFor="restaurant">
                    Restaurant to review:
                </label>

                <select className="rounded-md border border-gray-600"
                        value={restaurant} onChange={(e) => setRestaurant(e.target.value)}>
                    <option value="" disabled hidden>
                        Choose a restaurant
                    </option>
                    {restaurants && restaurants.map((restaurant: Restaurant) => (
                        <option key={restaurant._id} value={restaurant._id}>
                            {restaurant.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-row gap-5 items-center mb-5">
                <label className="block font-medium text-gray-600" htmlFor="rating">
                    Rating:
                </label>
                <div>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <button
                                key={ratingValue}
                                type="button"
                                onClick={() => setRating(ratingValue)}>
                                {ratingValue > rating ? (
                                    <svg key={i} className="w-5 h-5 text-gray-400 me-1 dark:text-gray-400"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                ) : (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 me-1" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-row gap-5 items-center mb-5">
                <label className="block font-medium text-gray-600"
                       htmlFor="title">
                    Title:
                </label>
                <input type="text"
                       className="block w-[500px] px-6 py-3
                               text-black bg-white border border-gray-400
                               appearance-none
                               rounded-xl
                               focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                       value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>

            <div className="flex flex-row gap-[14px] mb-10">
                <label className="block font-medium text-gray-600 mb-5"
                       htmlFor="body">
                    Body:
                </label>
                <textarea
                    className="resize-none
                               block w-[500px] h-24 px-6 py-3
                               text-black sm:text-sm
                               border border-gray-400 rounded-xl
                               bg-white appearance-none
                               placeholder:text-gray-400
                               focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    value={body} onChange={(e) => setBody(e.target.value)} required/>
            </div>

            <div className="flex flex-row gap-5 items-center mb-8">
                <label className="block font-medium text-gray-600"
                       htmlFor="title">
                    Attachments:
                </label>
                <input type="file"
                       className="block px-6 py-3 text-black bg-white border border-gray-400 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                       multiple onChange={handleImageChange}/>
            </div>

            <div className="flex flex-col items-center">
                <button
                    className={`items-center justify-center
                                    w-1/4 px-6 py-2.5
                                    text-center text-white font-medium text-sm
                                    duration-200
                                    bg-brandBlue border-2 border-brandBlue rounded-full
                                    inline-flex
                                    hover:bg-blue-600 hover:border-blue-600
                                    focus:outline-none focus-visible:outline-black focus-visible:ring-black`}
                    type="submit">
                    Post review
                </button>
            </div>
        </form>
    );
}

export default Form;