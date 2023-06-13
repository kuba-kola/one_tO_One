import React from 'react';
import FormPage from '../pages/FormPage';
import ResultPage from '../pages/ResultPage';
import CartPage from '../pages/CartPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="light">
            <Routes>
                <Route path="/" element={<CartPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </div>
    )
}

export default App;
