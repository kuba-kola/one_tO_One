
import React from 'react'; 
import ReactDOM from 'react-dom'
// import StoreContext from './contexts/store'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import RootStore from './store';

// const store = new RootStore();

ReactDOM.render(
    // <StoreContext.Provider value={store}>
        <App />
    // </StoreContext.Provider>
    , document.getElementById('root')
);
