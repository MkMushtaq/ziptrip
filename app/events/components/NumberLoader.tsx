import React, { useState, useEffect } from 'react';

const SimpleNumberLoader = ({ endValue = 100, duration = 400 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < endValue) {
            const timer = setTimeout(() => {
                setCount(prevCount => Math.min(prevCount + 1, endValue));
            }, duration / endValue);
            return () => clearTimeout(timer);
        }
    }, [count, endValue, duration]);

    return (
        <div className="text-6xl font-bold ">
            {count}
        </div>
    );
};

export default SimpleNumberLoader;