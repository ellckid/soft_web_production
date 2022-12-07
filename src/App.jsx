import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { context } from '.';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
function App() {

    return (
        <BrowserRouter>
            <section>
                <AppRouter />
            </section>
        </BrowserRouter>

    )


}

export default observer(App);
