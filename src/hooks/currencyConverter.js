import { useEffect, useState } from "react";

export default function useCurrencyConverter(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                return res.json();
            })
            .then(res => {
                setData(res[currency]);
            })
            .catch(err => {
                console.error('Error fetching currency data:', err);
            });
    }, [currency])
    
    return data;
}