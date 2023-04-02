import React, { useState } from 'react';
import { allProducts, columns } from './constants';
import Counter from './counter';

const App = () => {
    const [products, setProducts] = useState(allProducts)

    const setCount = (id, cnt) => {
        setProducts(products.map(item => item.id === id ? {...item, cnt} : item))
    }

    const removeItem = (id) => {
        setProducts(products.filter((item) => item.id !== id))
    }

    const totalSum = () =>  products.reduce((acc, item) => acc + item.price * item.cnt, 0);

    const renderItem = (prod) => (
        <tr key={prod.id}>
            <td>{prod.title}</td>
            <td>{prod.price}</td>
            <td>
                <Counter
                    max={prod.rest}
                    current={prod.cnt}
                    onChange={(cnt) => setCount(prod.id, cnt)}
                />
            </td>
            <td>{prod.price * prod.cnt}</td>
            <td>
                <button
                    type="button"
                    onClick={() => removeItem(prod.id)}
                >
                    X
                </button>
            </td>
        </tr>
    );

    return (
        <>
            <h1>Products</h1>
            <table>
                <tbody>
                    <tr>
                        {columns.map((title) =>
                            <th>{title}</th>
                        )}
                    </tr>
                    {products.map((field) => renderItem(field))}
                </tbody>
            </table>
            <h1>Total: {totalSum()}</h1>
        </>
    )
}

export default App;