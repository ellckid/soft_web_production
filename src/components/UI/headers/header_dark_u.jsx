import React from "react";
import { useContext } from "react";
import classes from './css/header_dark.module.css';
import { context } from "../../..";
import { Link } from "react-router-dom";
const HeaderDark_u = function () {
    const { store } = useContext(context);
    return (
        <div className={classes.header_container}>
            <div className={classes.header}>
                <a className={classes.logo} href="/index.html">
                    <img className={classes.logo_img} src="/assets/img/logo.png" />
                </a>
                <nav className={classes.nav}>
                    <Link className={classes.nav_link_u} to="/catalog">каталог</Link>
                    <Link className={classes.nav_link_u} to="/basket">корзина</Link>
                    <Link className={classes.nav_link_u} to="/login">войти</Link>
                </nav>
            </div>
        </div>

    )
}

export default HeaderDark_u;



