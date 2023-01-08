import React, { memo, useState, useContext, useEffect, useMemo, useRef } from "react";
import { context } from "..";
import Header from "../components/header";
import Loader from "../components/UI/loader/Loader";
import BasketSlider from "../components/UI/slider/basket_slider";
import Footer from "../components/UI/footer/Footer";
import classes from "../pages/css/BasketPage.module.css";
import { motion } from "framer-motion";

import CoconData from "../data/cocon_slider_data.json";
import BasketData from "../data/basket_slide.json";
import AuthService from "../services/AuthService";

function BasketPage() {
    const { store } = useContext(context);
    let [TotalPrice, setTotalPrice] = useState();
    const basket_submenu = useRef();
    const basketSection = useRef();
    const [ordersList, setOrdersList] = useState()
    function checkBasket() {

        // сортировка и удаление повторяющихся элементов
        store.basket.sort((a, b) => a.id - b.id);
        let a = []
        for (let i = 0; i < store.basket.length - 1; i++) {
            if (store.basket[i].id == store.basket[i + 1].id) {
                a.push(i)
            }
        }
        console.log(a)
        a.map((item) => store.basket.splice(item, 1))


    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
            basketSection.current.classList.toggle(classes.basket_section_open)
        }
        console.log('\x1b[32m%s\x1b[0m', 'id текущего пользователя ' + store.user.id)
        console.log('это массив корзины')
        console.log(store.basket)
        checkBasket();
        checkBasket();
        console.log('это отсортированный массив');
        console.log(store.basket)
        getTotalPrice();




    }, [])
    useEffect(() => {
        getTotalPrice()
    }, [store.basket])

    if (store.isLoading) {
        return <Loader />
    }
    function prettyDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    function getTotalPrice() {
        let summ = 0
        for (let i = 0; i < store.basket.length; i++) {
            summ = summ + parseInt(localStorage.getItem(i))
            console.log('\x1b[36m%s\x1b[0m', "значение карточки " + localStorage.getItem(i))
            console.log("промежуточная сумма " + summ)
        }
        return (
            setTotalPrice(summ),
            console.log("           ")
        )
    }

    function deleteBasketItem(id) {

        let index
        for (let i = 0; i < store.basket.length; i++) {
            console.log(store.basket[i])
            if (store.basket[i].id == id) {
                index = i
                console.log(index)

            }
        }

        let summ = 0
        for (let i = 0; i < store.basket.length; i++) {
            summ = summ + parseInt(localStorage.getItem(i))
            console.log('\x1b[36m%s\x1b[0m', "значение карточки " + localStorage.getItem(i))
            console.log("промежуточная сумма " + summ)
        }

        store.basket.splice(index, 1)

        return (
            setTotalPrice(summ),
            console.log("           "),
            console.log('кнопа нажата')
        )
    }


    return (
        <motion.div ref={basketSection} className={classes.main}
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: window.innerWidth, transition: { type: "linear", duration: "1s" } }}>
            {/* header */}
            <Header
                isLight={false}
            />

            <div className={classes.catalog_room}>
                <div className={classes.room_content}>
                    <div className={classes.sliders_container}>
                        <BasketSlider
                            delfunc={deleteBasketItem}
                            func={getTotalPrice}
                            type=""
                            data={store.basket}
                        />
                    </div>
                    <div className={classes.total_container}>
                        <div className={classes.total}>
                            <span className={classes.basket_title}>Промежуточный итог :</span>
                            <div ref={basket_submenu} className={classes.basket_submenu}>
                                <button className={classes.basket_button} onClick={() => {
                                    if (store.basket.length != 0) {
                                        let now = new Date()
                                        let orderdate = prettyDate(now)
                                        console.log(orderdate)

                                        store.addOrder(orderdate, store.user.id, store.basket, TotalPrice);
                                        console.log('запрос отправлен');
                                        basket_submenu.current.classList.toggle(classes.basket_submenu_open);
                                        store.basket.length = 0;
                                    }
                                }}>
                                    <a className={classes.basket_price}>{TotalPrice}₽</a>
                                    <img className={classes.basket_icon} src="/assets/img/market_icon.png"></img>
                                </button>
                                <button className={classes.basket_goto_button} onClick={() => {

                                    // basket_submenu.current.classList.toggle(classes.basket_submenu_open)

                                }}>
                                    <a className={classes.basket_goto_title}>Готово!</a>
                                    <img className={classes.basket_goto_icon} src="/assets/img/ok_icon.png"></img>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <!-- footer --> */}
                <div className={classes.room_footer}>
                    <Footer />
                </div>
            </div>

        </motion.div >
    )
}

export default BasketPage;
