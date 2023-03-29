import React, { useState } from 'react';
import classes from './Counter.module.css'

interface CounterProps {
    initialValue: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    const finalClassName =  count === 5 ? classes.counter : ''

    return (
        <div>
            <h2 className={finalClassName}>{count}</h2>
            <button onClick={handleIncrement} disabled={count === 5}>inc</button>
            <button onClick={handleReset} disabled={count === 0}>reset</button>
        </div>
    );
};

export default Counter;
