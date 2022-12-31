import React, { useState, useContext, useEffect } from "react";
import { context } from "..";
import Header from "../components/header";
import Footer from "../components/UI/footer/Footer";
import Loader from "../components/UI/loader/Loader";
import classes from "../pages/css/OrdersPage.module.css";
import { Link } from "react-router-dom";
import MyProfile from "../components/UI/profileForms/myprofile";
import { motion } from "framer-motion";

function ProfilePage() {
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
        <motion.div className={classes.profile_section}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 2 } }}>
            {/* header */}

            <Header
                isLight={false}
            />

            <div className={classes.room}>
                <div className={classes.profile_menu_container}>
                    <div className={classes.profile_menu}>
                        <h1 className={classes.profile_menu_title}>Мой профиль</h1>
                        <h2 className={classes.profile_menu_subtitle}>Здесь вы можете посмотреть данные профиля и историю заказов</h2>
                        <div className={classes.menu_button_container}>
                            <Link to='/myprofile' className={classes.menu_button_link}><button className={classes.menu_button_act}>Настройки аккаунта</button> </Link>
                            <Link to='/myorders' className={classes.menu_button_link}><button className={classes.menu_button_unact}>Мои заказы</button></Link>

                            <button className={classes.menu_button_unact} onClick={() => {
                                store.logout();
                            }}>Выйти</button>
                        </div>
                    </div>
                </div>


                <div className={classes.profile_form_container}>
                    <div className={classes.profile_form}>
                        <MyProfile />
                    </div>
                </div>
            </div>
            <div className={classes.profile_footer}>

                <Footer />
            </div>
        </motion.div >
    )

}
export default ProfilePage;
