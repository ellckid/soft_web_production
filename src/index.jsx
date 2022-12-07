import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';


const store = new Store();
export const context = createContext({
    store

})
ReactDOM.render(
    <context.Provider value={{
        store
    }}>
        <App />
    </context.Provider>,

    document.getElementById('root')
);