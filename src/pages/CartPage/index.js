import React from "react";
import uniqid from "uniqid";
import { arrayOf, func, object } from "prop-types";
import { columns } from "../../shared/constants";
import Counter from "../../Counter";

import "./styles.css"

const CartPage = ({
    products,
    onChange,
    onRemove,
    onNext
}) => {
    
    const totalSum = () => products.reduce((acc, item) => acc + item.price * item.cnt, 0);

    const renderItem = (prod) => (
        <tr key={uniqid()}>
            <td>{prod.title}</td>
            <td>${prod.price}</td>
            <td>
                <Counter
                    max={prod.rest}
                    current={prod.cnt}
                    onChange={(cnt) => onChange(prod.id, cnt)}
                />
            </td>
            <td>${prod.price * prod.cnt}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onRemove(prod.id)}
                >
                    X
                </button>
                <button
                    type="button"
                    className="btn btn-warning max-btn"
                    onClick={() => onChange(prod.id, prod.rest)}
                >
                    MAX
                </button>
            </td>
        </tr>
    );

    return (
        <form className="form-container">
                <h1>Products</h1>
                <table>
                    <tbody>
                        <tr>
                            {columns.map((title) =>
                                <th>{title}</th>
                            )}
                        </tr>
                        {products.map((field) => renderItem(field))}
                    </tbody>
                </table>
                <hr />
                {products.length === 0 && (
                    <>
                        <h4>Empty</h4>
                        <hr />
                    </>
                )}
                <h1>Total: ${totalSum()}</h1>
                <hr />
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn btn-success my-btn"
                        onClick={onNext}
                    >
                        Submit
                    </button>
                </div>
            </form>
    )
}

CartPage.propTypes = {
    onChange: func.isRequired,
    onRemove: func.isRequired,
    onNext: func.isRequired,
    products: arrayOf(object).isRequired,
  };

export default CartPage;