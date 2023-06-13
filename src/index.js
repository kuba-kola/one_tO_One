
import React from 'react'; 
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import StoreContext from './contexts/store'
import RootStore from './store'
import { BrowserRouter } from 'react-router-dom';

const store = new RootStore();

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContext.Provider>
    , document.getElementById('root')
);
