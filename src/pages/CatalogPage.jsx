import React, { useState } from "react";
import Header from "../components/header";
import { context } from "..";
import { useContext } from "react";
import { useEffect } from "react";
import Loader from "../components/UI/loader/Loader";
import StickySlider from "../components/UI/slider/sticky_slider"
import Footer from "../components/UI/footer/Footer";
import classes from "../pages/css/CatalogPage.module.css";
import CatalogSlider from "../components/UI/slider/sticky_slider";
import { motion } from "framer-motion";
// import PuffData from "../data/puff_slider_data.json";
import CoconData from "../data/cocon_slider_data.json";
import AuthService from "../services/AuthService";



function CatalogPage() {
    const { store } = useContext(context);
    const [products, setProducts] = useState([]);
    let puffs = [];
    let cocons = [];
    async function getProducts() {
        try {
            const response = await AuthService.getProductList();
            setProducts(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    products.map((item, id) => {
        if (item.title.indexOf('кресло') == 13) {
            console.log(item.title.indexOf('кресло'))
            puffs.push(item)
        }
        if (item.title.indexOf('кокон') == 13) {
            cocons.push(item);
        }
    })


    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
        getProducts();
    }, [])
    if (store.isLoading) {
        return <Loader />
    }


    return (
        <div className={classes.main}>
            {/* header */}

            <Header
                isLight={false}
            />


            <div className={classes.catalog_room}>
                <div className={classes.sliders_container}>
                    <StickySlider
                        type=" пуфы"
                        data={puffs}
                    />
                    <StickySlider
                        type="коконы"
                        data={cocons}
                    />

                </div>
                {/* <!-- footer --> */}
                <div className={classes.room_footer}>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default CatalogPage;
