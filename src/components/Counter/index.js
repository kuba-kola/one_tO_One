import React, { useEffect, useState } from "react";
import { number } from "prop-types";

import "./styles.css"

const Counter = ({ min, max, onChange, current }) => {
    const [inputValue, setInputValue] = useState("");

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
        <div className="countContainer">
            <button
                type="button"
                className="btn btn-danger"
                onClick={dec}
                disabled={inputValue === min}
            >
                -
            </button>
            <input
                type="number"
                className="counterInput"
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
                className="btn btn-success"
                onClick={inc}
                disabled={inputValue === max}
            >
                +
            </button>
        </div>
    )
}

Counter.propTypes = {
    min: number,
    max: number.isRequired,
};

Counter.defaultProps = {
    min: 0,
}

export default Counter;
