import React from "react";
import { useContext } from 'react';
import { useEffect } from 'react';
import { context } from "..";
import AuthForm from "../components/AuthForm/AuthForm";
import Header from "../components/header";
import Footer from "../components/UI/footer/Footer";
import Loader from "../components/UI/loader/Loader";
import classes from "../pages/css/LoginPage.module.css"

function LoginPage() {
    const { store } = useContext(context);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    if (store.isLoading) {
        return <Loader />
    }
    return (
        <section className={classes.login_section}>
            {/* header */}

            <Header
                isLight={false}
            />


            <div className={classes.room}>
                <div className={classes.login_container}>
                    <AuthForm />
                </div>
                <div className={classes.login_footer}>
                    <Footer />
                </div>

            </div>

        </section>

    )

}
export default LoginPage;
