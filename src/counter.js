import React, { useEffect, useState } from "react";
import { func, number } from "prop-types";


const Counter = ({ min, max, onChange, current }) => {
    const [inputValue, setInputValue] = useState(current);

    useEffect(() => {
        setInputValue(current);
    }, [current]);

    const parseCurrent = () => {
        const num = parseInt(inputValue);
        setCurrent(isNaN(num) ? min : num);
    }

    const setCurrent = (num) => onChange(Math.max(min, Math.min(max, num)));
    
    const dec = () =>  setCurrent(current - 1);
    const inc = () => setCurrent(current + 1);

    return (
        <div>
            <button
                type="button"
                onClick={dec}>
                -
            </button>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={parseCurrent}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      parseCurrent(e);
                    }
                  }}
            />
            <button
                type="button"
                onClick={inc}
            >
                +
            </button>
        </div>
    )
}

Counter.propTypes = {
    min: number,
    max: number.isRequired,
    current: number.isRequired,
    onChange: func.isRequired,
};

Counter.defaultProps = {
    min: 0,
}

export default Counter;
