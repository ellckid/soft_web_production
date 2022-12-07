import React, { useState, useContext, useEffect } from "react";
import { context } from "..";
import Header from "../components/header";
import Footer from "../components/UI/footer/Footer";
import Loader from "../components/UI/loader/Loader";
import classes from "../pages/css/OrdersPage.module.css";
import OrdersForm from "../components/UI/profileForms/orders_form";
import { Link } from "react-router-dom";

function OrdersPage() {
    const { store } = useContext(context);
    const [orders, setOrdersList] = useState([])
    const activeButton = classes.menu_button_act;
    const unactiveButton = classes.menu_button_unact;


    async function postOrdersList(userid) {
        try {
            const response = await store.postOrders(userid);
            console.log(response)
            setOrdersList(store.orderlist.reverse());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
        postOrdersList(store.user.id)
        console.log("полученные данные " + orders)
    }, [])


    if (store.isLoading) {
        return <Loader />
    }
    return (
        <section className={classes.profile_section}>
            {/* header */}
            <div className={classes.profile_header}>
                <Header
                    isLight={false}
                />
            </div>
            <div className={classes.room}>
                <div className={classes.profile_menu_container}>
                    <div className={classes.profile_menu}>
                        <h1 className={classes.profile_menu_title}>Мой профиль</h1>
                        <h2 className={classes.profile_menu_subtitle}>Здесь вы можете посмотреть данные профиля и историю заказов</h2>
                        <div className={classes.menu_button_container}>
                            <Link to='/myprofile' className={classes.menu_button_link}><button className={classes.menu_button_unact}>Настройки аккаунта</button> </Link>
                            <Link to='/myorders' className={classes.menu_button_link}><button className={classes.menu_button_act}>Мои заказы</button></Link>

                            <button className={classes.menu_button_unact} onClick={() => {
                                store.logout();
                            }}>Выйти</button>
                        </div>
                    </div>
                </div>


                <div className={classes.profile_form_container}>
                    <div className={classes.profile_form}>
                        <OrdersForm data={orders} />
                    </div>
                </div>
            </div>
            <div className={classes.profile_footer}>

                <Footer />
            </div>
        </section >
    )

}
export default OrdersPage;
