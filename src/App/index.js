import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import FormPage from '../pages/FormPage';
import ResultPage from '../pages/ResultPage';
import ErrorPage from '../pages/ErrorPage';
import CartPage from '../pages/CartPage';
import MainPage from '../pages/Home';
import ProductPage from '../pages/Product';

const App = () => {
    return (
        <div className="light">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default App;
