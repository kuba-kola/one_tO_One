import React from "react";
import "./styles.css"; 
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import Card from "../../components/Card";

import "./styles.css"


const MainPage = observer(() => {
    const [productsStore] = useStore('products');
    return (
        <>
            <h1 className="errorText">Hi there</h1>
            <hr/>
            <div className="cardsContainer card-group">
                {productsStore.products.map((cards) => <Card data={cards} />)}
            </div>
            
        
        </>
    )
});

export default MainPage;