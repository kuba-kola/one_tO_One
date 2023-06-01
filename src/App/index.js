import React, { useState } from 'react';
import { allProducts } from '../shared/constants';
import FormPage from '../pages/FormPage';
import ResultPage from '../pages/ResultPage';
import CartPage from '../pages/CartPage';

const App = () => {
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

    return (
        <div className="light"> 
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