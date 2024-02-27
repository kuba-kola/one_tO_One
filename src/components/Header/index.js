import React from "react";
import { observer } from 'mobx-react-lite';
import { NavLink } from "react-router-dom";
import useStore from '../../hooks/useStore';

import "./styles.css";

const Header = observer(() => {
    const [cartStore] = useStore("products");
    console.log(cartStore.products);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="header-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav active" aria-current="page">
                    <NavLink
                        to={{ pathname: "/" }}
                        activeClassName="nav-item nav-link active"
                        className="nav-item nav-link"
                    >
                        Home
                    </NavLink>
                </div>
                <div class="navbar-nav">
                    <NavLink
                        to={{ pathname: "/cart" }}
                        activeClassName="nav-item nav-link active"
                        className="nav-item nav-link"
                    >
                        Products
                    </NavLink>
                </div>
                <div class="navbar-nav">
                    <NavLink
                        to={{ pathname: "/form" }}
                        activeClassName="nav-item nav-link active"
                        className="nav-item nav-link"
                    >
                        Order Form
                    </NavLink>
                </div>
                <div class="navbar-nav">
                    <NavLink
                        to={{ pathname: "/result" }}
                        activeClassName="nav-item nav-link active"
                        className="nav-item nav-link"
                    >
                        Cart
                    </NavLink>
                </div>
            </div>
            <div className="carContainer">
                <button
                    type="button"
                    class="btn btn-outline-danger"
                >
                    <div className="totalProducts">
                        {cartStore.inCart === 0 ? "" : cartStore.inCart}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                    {cartStore.total === 0 ? "" :`$${cartStore.total}`}
                </button>
            </div>
        </nav>
   )
});

export default Header;