import React, { useEffect, useState } from 'react';

const UseFetchHook = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message); // Update error state with error message
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, []); // Include fetchData in dependency array

    return { data, loading, error };
};

export default UseFetchHook;
