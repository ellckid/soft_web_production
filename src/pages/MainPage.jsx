import React from "react";
import Header from "../components/header";
import { context } from "..";
import { useContext } from "react";
import { useEffect } from "react";
import Loader from "../components/UI/loader/Loader";
import Footer from "../components/UI/footer/Footer"
import classes from './css/MainPage.module.css'
import Bushes from "../components/main/bushes";
import Clouds from "../components/main/clouds";
import Puff from "../components/main/puff";
import { motion } from "framer-motion";

function MainPage() {
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
        <motion.section
            className={classes.main}
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: window.innerWidth, transition: { type: "linear", duration: 2 } }}>

            {/* header */}

            <Header
                isLight={true}
            />

            <div className={classes.room}>

                {/* <!-- bacground sun clouds puff books bushes --> */}
                <img className={classes.room_background_img} src="/assets/img/room_back.png" />
                <img className={classes.room_books_img} src='/assets/img/books.png' />
                <img className={classes.room_sun_img} src='/assets/img/sun.png' />
                <div className={classes.room_clouds}>
                    <Clouds />
                </div>
                <Puff />
                <Bushes />

                {/* <!-- footer --> */}
                <div className={classes.room_footer}>
                    <Footer />
                </div>
            </div>



        </motion.section >
    )
}

export default MainPage;
