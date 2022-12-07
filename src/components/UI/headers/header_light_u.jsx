import React from "react";
import { useContext } from "react";
import classes from './css/header_light.module.css';
import { context } from "../../..";
import { Link } from "react-router-dom";
const HeaderLight_u = function () {
    const { store } = useContext(context);
    return (
        // < header className={classes.header} >
        <div className={classes.container}>
            <div className={classes.header_inner}>
                <Link className={classes.logo} to="/main">
                    <img className={classes.logo_img} src="/assets/img/logo.png" />
                </Link>
                <div className={classes.header_empty}></div>
                <nav className={classes.nav}>
                    <Link className={classes.nav_link} to="/catalog">каталог</Link>
                    <Link className={classes.nav_link} to="/basket">корзина</Link>
                    <Link className={classes.nav_link} to="/basket">войти</Link>
                </nav>
            </div>
        </div >
        // </header >
    )
}

export default HeaderLight_u;



