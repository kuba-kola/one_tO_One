import React from "react";
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';

import "./styles.css"
import { Link } from "react-router-dom";


const ResultPage = observer(() => {
    const [cartStore, orderStore] = useStore("products", "order");

    return (
        <form className="form-container">
            <h1>You order</h1>
            <hr />
            <h3>In you order: {cartStore.products.length} items</h3>
            <h3>Total cost: ${cartStore.total}</h3>
            <hr />
            <h5>{orderStore.data.name}, {orderStore.data.email}, {orderStore.data.phone}</h5>
                
            <div className="btn-container">
                <Link
                    className="btn btn-success my-btn"
                    to="/">
                    Submit
                </Link>
                <Link
                    className="btn btn-warning"
                    to="/form">
                    Back
                </Link>
            </div>
        </form>
    )
});
  
  ResultPage.propTypes = {};
  
export default ResultPage;
