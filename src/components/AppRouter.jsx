import { AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { HashRouter, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { context } from '..';
import { privateRoutes, publicRoutes } from "../router";
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const { store } = useContext(context);
    const location = useLocation();
    if (store.isLoading) {
        <Loader />
    }

    console.log(store.isAuth);
    return (

        (store.isAuth)

            ?
            <AnimatePresence>
                <HashRouter location={location} key={location.pathname}>
                    {privateRoutes.map(route =>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                    <Redirect to='/main' />
                </HashRouter>
            </AnimatePresence>
            :
            <AnimatePresence>
                <HashRouter location={location} key={location.pathname}>
                    {publicRoutes.map(route =>
                        <Route
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                    <Redirect to='/login' />
                </HashRouter>
            </AnimatePresence>
    );
};

export default observer(AppRouter);
