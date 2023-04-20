import React from "react";
import { string } from "prop-types";

import "./styles.css"


const ResultPage = ({
    products,
    info,
    onNext,
    onPrev,
}) => {
    const totalSum = () => products.reduce((acc, item) => acc + item.price * item.cnt, 0);
    console.log(info)
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
    customerName: string,
    customerEmail: string,
    customerPhone: string,
  };
  
  ResultPage.defaultProps = {
    customerName: "John Doe",
    customerEmail: "test@email.xom",
    customerPhone: "508575226",
  };
  
export default ResultPage;
