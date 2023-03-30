import React, { useState } from "react";
import { number } from "prop-types";


const Counter = ({ min, max }) => {
    const [current, setCurrent] = useState(min)
    
    const dec = () => {
        setCurrent(Math.max(min, current - 1));
    };
    const inc = () => {
        setCurrent(Math.min(max, current + 1));
    };

    const setValue = (e) => {
        const value = Math.min(max, Math.max(min, parseInt(e.target.value) || min));
        setCurrent(value);
    }

    return (
        <div>
            <button onClick = {inc}>+</button>
            <input value={current} onChange={setValue} />
            <button onClick = {dec}>-</button>
        </div>
    )
}

Counter.propTypes = {
    min: number.isRequired,
    max: number.isRequired,
};

export default Counter;