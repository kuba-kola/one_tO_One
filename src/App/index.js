import React, { useState } from 'react';
import { allProducts } from '../shared/constants';
import FormPage from '../pages/FormPage';
import ResultPage from '../pages/ResultPage';
import Header from '../Header';

import "./styles.css"
import CartPage from '../pages/CartPage';

const App = ({ onSubmit }) => {
    const [products, setProducts] = useState(allProducts)
    const [formData, setFormData] = useState({});

    const [ page, setPage] = useState("cart")
    const moveToForm = () => setPage("form");
    const moveToResult = () => setPage("result");
    const moveToCart = () => setPage("cart");

    const setCount = (id, cnt) => {
        setProducts(products.map(item => item.id === id ? {...item, cnt} : item))
    }

    const removeItem = (id) => {
        setProducts(products.filter((item) => item.id !== id))
    }

    const handleFormSubmit = (data) => {
        setFormData(data);
      }

   

    return (
        <div className="light"> 
            <Header />
            {page === "cart" && (
                <CartPage
                    products={products}
                    onChange={setCount}
                    onRemove={removeItem}
                    onNext={moveToForm}
                />
            )}
            {page === "form" && (
                <FormPage
                    onSubmit={handleFormSubmit}
                    onNext={moveToResult}
                    onPrev={moveToCart}
                />
            )}
            {page === "result" && (
                <ResultPage
                    products={products}
                    info={formData}
                    onNext={moveToCart}
                    onPrev={moveToForm}
                />
            )}
        </div>
    )
}

export default App;