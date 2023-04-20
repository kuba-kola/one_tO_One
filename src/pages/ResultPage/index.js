import React from "react";
import { arrayOf, func, object } from "prop-types";

import "./styles.css"


const ResultPage = ({
    products,
    info,
    onNext,
    onPrev,
}) => {
    const totalSum = () => products.reduce((acc, item) => acc + item.price * item.cnt, 0);

    return (
        <form className="form-container">
            <h1>You order</h1>
            <hr />
            <h3>In you order: {products.length} items</h3>
            <h3>Total cost: ${totalSum()}</h3>
            <hr />
            <h5>{info.name}, {info.email}, {info.phone}</h5>
                
            <div className="btn-container">
                <button
                    type="button"
                    className="btn btn-success my-btn"
                    onClick={onNext}
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={onPrev}
                >
                    Back
                </button>
            </div>
        </form>
    )
};
  
  ResultPage.propTypes = {
    products: arrayOf(object).isRequired,
    info: object.isRequired,
    onNext: func.isRequired,
    onPrev: func.isRequired,
  };
  
export default ResultPage;
