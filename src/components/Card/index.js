import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import useStore from '../../hooks/useStore';
import Counter from "../Counter";

import "./styles.css";

const Card = observer(({ data }) => {

    const [productsStore] = useStore('products');
    return (
        <div class="card mb-3" className="cardContainer">
        <div class="row g-0">
            <div class="cardInfo">
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{`$${data.price}`}</p>
                    
                </div>
                </div>
                <div className="counterContainer">
                    <Counter
                        max={data.rest}
                        current={data.cnt}
                        onChange={(cnt) => productsStore.onChange(data.id, cnt)}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-danger maxBtn"
                        onClick={() => productsStore.onChange(data.id, 0)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </button>
                </div>
                <Link
                    to={`/product/${data.id}`}
                    className="btn btn-outline-dark readMore"
                >
                    Read more...
                </Link>
        </div>
        </div>
    )
});

export default Card;
 