import React from "react";
import { useContext } from "react";
import classes from './css/header_dark.module.css';
import { context } from "../../..";
import { Link } from "react-router-dom";

const HeaderDark_a = function () {
    const { store } = useContext(context);
    return (
        // < header className={classes.header} >
        <div className={classes.container}>
            <div className={classes.header_inner}>
                <a className={classes.logo} href="/index.html">
                    <img className={classes.logo_img} src="/assets/img/logo.png" />
                </a>
                <div className={classes.header_empty}></div>
                <nav className={classes.nav}>
                    <Link className={classes.nav_link} to="/catalog">каталог</Link>
                    <Link className={classes.nav_link} to="/basket">корзина</Link>
                    <div className={classes.enter_link}>
                        <img className={classes.smile_img} src="/assets/img/smile_dark.png" />
                        <div className={classes.nav_submenu_hover} ></div>
                    </div>
                    <ul className={classes.nav_submenu}>
                        <Link className={classes.nav_submenu_link} to="/myorders">Мой кабинет</Link>
                        <Link className={classes.nav_submenu_link} onClick={() => {
                            store.isAuth = false
                            store.logout()
                        }} >Выйти</Link>
                    </ul>
                </nav>
            </div>
        </div>
        // </header >
    )
}


export default HeaderDark_a;



