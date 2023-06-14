import React from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import Counter from "../../components/Counter";
import ErrorPage from "../ErrorPage";

import "./styles.css";

const ProductPage = observer(() => {
    const { id } = useParams();
    const [productsStore] = useStore('products');
    const product = productsStore.products.find(product => product.id === Number(id));

    if (!product) {
        return <ErrorPage/>
    }

    return (
        <div class="card">
            <div class="card-header errorText">
                Product Page: {product.title}
            </div>
            <div class="card-body">
                <h5 class="card-title">Description:</h5>
                <p class="card-text">There will be a description of the product and stuff like that</p>
                <div className="productPageCounter">
                    <button
                        type="button"
                            className="btn btn-outline-primary"
                        onClick={() => productsStore.onChange(product.id, product.rest)}
                    >
                        MAX
                    </button>
                    <Counter
                        max={product.rest}
                        current={product.cnt}
                        onChange={(cnt) => productsStore.onChange(product.id, cnt)}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-danger maxBtn"
                        onClick={() => productsStore.onChange(product.id, 0)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </button>
                </div>
                
            </div>
            <div className="errorBtn">
                <Link
                    className="btn btn-warning"
                    to="/"
                >
                    Back to main
                </Link>
            </div>
        </div>
)
});

export default ProductPage;