import React, { useState } from "react";
import Header from "../components/header";
import { context } from "..";
import { useContext } from "react";
import { useEffect } from "react";
import Loader from "../components/UI/loader/Loader";
import StickySlider from "../components/UI/slider/sticky_slider"
import Footer from "../components/UI/footer/Footer";
import classes from "../pages/css/CatalogPage-2.module.css";
import CatalogSlider from "../components/UI/slider/sticky_slider";
import { motion } from "framer-motion";
// import PuffData from "../data/puff_slider_data.json";
import CoconData from "../data/cocon_slider_data.json";
import AuthService from "../services/AuthService";
import BasketSlide from "../components/UI/slider/basket_slide";
import CatalogSlide from "../components/UI/slider/catalog_slide";
import { Link } from "react-router-dom";



function CatalogPage_2() {
    const { store } = useContext(context);
    const [products, setProducts] = useState([]);
    async function getProducts() {
        try {
            const response = await AuthService.getProductList();
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

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

            < Header
                isLight={false}
            />


            <div className={classes.catalog_room}>
                <div className={classes.catalog_container}>
                    <div className={classes.catalog_title_container}>
                        <Link className={classes.catalog_2_link} to="/catalog"><img className={classes.catalog_2_link_img} src="/assets/img/view_icon.png" /></Link>
                        <h1 className={classes.catalog_2_title}>Все пуфики</h1>
                        <Link className={classes.catalog_2_link} to="/catalog-2"><img className={classes.catalog_2_link_img} src="/assets/img/allview_icon.png" /></Link>
                    </div>
                    <div className={classes.sliders_container}>
                        {
                            products.map((item, id) => (
                                <div key={id}>
                                    {/* добавляем слайд */}
                                    <CatalogSlide title={item.title} color={item.color} url={item.url} price={item.price} id={id}>
                                    </CatalogSlide>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <!-- footer --> */}
                <div className={classes.room_footer}>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default CatalogPage_2;
