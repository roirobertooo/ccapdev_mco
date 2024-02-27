import {useEffect, useState} from 'react';

export const useFetchData = <T>(fetchString: string): T | undefined => {
    const [data, setData] = useState<T>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(fetchString);
            const data = await response.json();

            setData(data);
        };

        fetchData().then(
            () => console.log(`Fetched ${fetchString.split("/")[2]} data`),
            (error) => console.error(`Error fetching ${fetchString.split("/")[2]} data`, error)
        );
    }, [fetchString]);

    return data;
};
