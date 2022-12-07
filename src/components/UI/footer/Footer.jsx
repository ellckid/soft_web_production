import React from "react"
import classes from '../footer/Footer.module.css'

function Footer() {
    return (
        <footer className={classes.main_footer}>
            <a className={classes.footer_text}>2022 © Мягкий — интернет-магазин бескаркасной мебели. Все права защищены. Доставка по всей России.</a>
        </footer>
    )
}

export default Footer;
