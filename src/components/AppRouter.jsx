import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { context } from '..';
import { privateRoutes, publicRoutes } from "../router";
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const { store } = useContext(context);

    if (store.isLoading) {
        <Loader />
    }

    console.log(store.isAuth);
    return (

        (store.isAuth)

            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/main' />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/login' />
            </Switch>
    );
};

export default observer(AppRouter);
