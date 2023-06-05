import React, { useState } from 'react';
import FormPage from '../pages/FormPage';
import ResultPage from '../pages/ResultPage';
import CartPage from '../pages/CartPage';

const App = () => {

    const [ page, setPage] = useState("cart")
    const moveToForm = () => setPage("form");
    const moveToResult = () => setPage("result");
    const moveToCart = () => setPage("cart");

    return (
        <div className="light"> 
            {page === "cart" && (
                <CartPage
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
                    onNext={moveToCart}
                    onPrev={moveToForm}
                />
            )}
        </div>
    )

    // const App = () => {
    //     return (
    //         <div className="light">
    //             <Routes>
    //                 <Route path="/" element={<CartPage />} />
    //                 <Route path="/form" element={<FormPage />} />
    //                 <Route path="/result" element={<ResultPage />} />
    //             </Routes>
    //         </div>
    //     )
    // }
}

export default App;
