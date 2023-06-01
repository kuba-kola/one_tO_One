import React from "react";
import uniqid from "uniqid";
import { arrayOf, func, object } from "prop-types";
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import { columns } from "../../shared/constants";
import Counter from "../../components/Counter";

import "./styles.css"

const CartPage = observer(({
    onNext
}) => {
    const [ cartStore ] = useStore('cart');

    const renderItem = (prod) => (
        <tr key={uniqid()}>
            <td>{prod.title}</td>
            <td>${prod.price}</td>
            <td>
                <Counter
                    max={prod.rest}
                    current={prod.cnt}
                    onChange={(cnt) => cartStore.onChange(prod.id, cnt)}
                />
            </td>
            <td>${prod.price * prod.cnt}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => cartStore.onRemove(prod.id)}
                >
                    X
                </button>
                <button
                    type="button"
                    className="btn btn-warning max-btn"
                    onClick={() => cartStore.onChange(prod.id, prod.rest)}
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
                    {cartStore.products.map((field) => renderItem(field))}
                </tbody>
            </table>
            <hr />
            {cartStore.products.length === 0 && (
                <>
                    <h4>Empty</h4>
                    <hr />
                </>
            )}
            <h1>Total: ${cartStore.total}</h1>
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
});

CartPage.propTypes = {
    onChange: func.isRequired,
    onRemove: func.isRequired,
    onNext: func.isRequired,
    products: arrayOf(object).isRequired,
  };

export default CartPage;