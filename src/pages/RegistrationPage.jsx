import React from "react";
import { useContext } from 'react';
import { useEffect } from 'react';
import { context } from "..";
import RegForm from "../components/RegForm/RegForm";
import Header from "../components/header";
import Footer from "../components/UI/footer/Footer";
import Loader from "../components/UI/loader/Loader";
import classes from "../pages/css/RegistrationPage.module.css";
import { motion } from "framer-motion";

function RegistrationPage() {
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
        <motion.div className={classes.reg_section}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 2 } }}>
            {/* header */}

            <Header
                isLight={false}
            />


            <div className={classes.room}>
                <div className={classes.reg_container}>
                    <RegForm />
                </div>
            </div>
            <div className={classes.reg_footer}>
                <Footer />
            </div>

        </motion.div>

    )

}
export default RegistrationPage;
