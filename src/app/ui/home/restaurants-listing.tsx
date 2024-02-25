import {useEffect, useState} from "react";

interface Restaurant {
    _id: {
        $oid: string;
    };
    name: string;
    description: string;
    address: string;
    phone: string;
    hours: string[][];
}

export default function RestaurantListing() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/restaurants/route'); // replace '/api/route' with your actual API route
            const data = await response.json();

            setRestaurants(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Restaurants</h1>

            <ul>
                {restaurants.map((restaurant, index) => (
                    <li key={index}>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.description}</p>
                        <p>{restaurant.address}</p>
                        <p>{restaurant.phone}</p>
                        <p>{restaurant.hours}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
