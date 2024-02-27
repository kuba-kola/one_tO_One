import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ErrorPage = () => (
    <>
        <h1 className="errorText">This page does not exist</h1>
        <hr/>
        <div className="errorBtn">
            <Link
                className="btn btn-warning"
                to="/"
            >
                Back to main
            </Link>
        </div>
    </>
);

export default ErrorPage;