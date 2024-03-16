import {useEffect, useState} from 'react';

const useFetchData = <T, >(fetchString: string): [T | null, string | null] => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(fetchString)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                return response.json();
            })
            .then(json => setData(json))
            .catch(error => setError(error.message));
    }, [fetchString]);

    return [data, error];
};

const TruncateText = ({text, maxChar, includeQuotes}: {
    text: string;
    maxChar: number;
    includeQuotes: boolean;
}) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };

    const quotedText = includeQuotes ? `"${isTruncated ? text.slice(0, maxChar) : text}` : `${isTruncated ? text.slice(0, maxChar) : text}`;

    return (
        <p>
            {quotedText}
            {text.length > maxChar && (
                <span onClick={toggleTruncate} className="cursor-pointer">
                    {isTruncated && <span>...</span>}
                    <span> </span>

                    <span className="text-blue-600 hover:underline">
                        {isTruncated ? "more" : "show less"}
                    </span>
                </span>
            )}
            {includeQuotes && <span>&quot;</span>}
        </p>
    );
};

const formatDateToLocal = (dateStr: string, locale: string = "en-US") => {
    const date = new Date(dateStr);

    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };

    const formatter = new Intl.DateTimeFormat(locale, options);

    return formatter.format(date);
};

const formatTime = (timeStr: string) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";

    let formattedHour = hour % 12;
    if (formattedHour === 0) {
        formattedHour = 12;
    }

    const formattedMinute = minute < 10 ? `0${minute}` : minute;

    return `${formattedHour}:${formattedMinute} ${period}`;
};

const postData = (postString: string) => {
    fetch(postString, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
};

const putData = (putString: string) => {
    fetch(putString, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
};

export {useFetchData, TruncateText, formatDateToLocal, formatTime, postData, putData};