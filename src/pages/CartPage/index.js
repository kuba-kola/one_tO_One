import React from "react";
import uniqid from "uniqid";
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import { columns } from "../../shared/constants";
import Counter from "../../components/Counter";

import "./styles.css"
import { Link } from "react-router-dom";

const CartPage = observer(() => {
    const [ productsStore ] = useStore('products');

    const renderItem = (prod) => (
        <tr key={uniqid()}>
            <td>{prod.title}</td>
            <td>${prod.price}</td>
            <td>
                <Counter
                    max={prod.rest}
                    current={prod.cnt}
                    onChange={(cnt) => productsStore.onChange(prod.id, cnt)}
                />
            </td>
            <td>${prod.price * prod.cnt}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => productsStore.onRemove(prod.id)}
                >
                    X
                </button>
                <button
                    type="button"
                    className="btn btn-warning max-btn"
                    onClick={() => productsStore.onChange(prod.id, prod.rest)}
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
                    {productsStore.products.map((field) => renderItem(field))}
                </tbody>
            </table>
            <hr />
            {productsStore.products.length === 0 && (
                <>
                    <h4>Empty</h4>
                    <hr />
                </>
            )}
            <h1>Total: ${productsStore.total}</h1>
            <hr />
            <div className="btn-container">
                <Link
                    className="btn btn-success my-btn"
                    to="/form">
                    Submit
                </Link>
            </div>
        </form>
    )
});

CartPage.propTypes = {};

export default CartPage;