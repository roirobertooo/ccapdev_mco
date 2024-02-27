import {useEffect, useState} from 'react';

export const useFetchData = <T>(fetchString: string): T | undefined => {
    const [data, setData] = useState<T>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(fetchString);
            const data = await response.json();

            setData(data);
        };

        const params = new URLSearchParams(fetchString.split('?')[1]);
        const collectionName = params.get('collectionName');

        fetchData().then(
            () => console.log(`Fetched ${collectionName} data`),
            (error) => console.error(`Error fetching ${collectionName} data`, error)
        );
    }, [fetchString]);

    return data;
};

export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'en-US',
) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
};
