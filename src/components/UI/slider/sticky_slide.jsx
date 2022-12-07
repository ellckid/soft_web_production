import React, { useState, useRef } from 'react';
import classes from "./css/slide.module.css";
import BasketItem from '../../../data/basketItem';
import { context } from '../../..';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { isContentEditable } from '@testing-library/user-event/dist/utils';
import Counter from '../counter/counter';

const StickySlide = ({ url, title, color, price, id, func }) => {
    const { store } = useContext(context);
    const [count, setCount] = useState(0);

    const CatalogItemMenu = useRef()


    function addBasketItem(id, title, price, color, url, count) {

        const item = new BasketItem(id, title, color, url, price, count)
        return item
    }

    return (
        <div className={classes.slide}>
            <div className={classes.slide_container}>
                <div className={classes.content_picture} >
                    <img className={classes.content_img} src={url}></img>
                </div>
                <div className={classes.slide_text}>
                    <h1 className={classes.slide_text_title}>{title}</h1>
                    <h2 className={classes.slide_text_color}>{color}</h2>
                </div>
                <div ref={CatalogItemMenu} className={classes.slide_slidemenu}>
                    <div className={classes.button_container}>
                        <button onClick={() => {
                            const item = addBasketItem(id, title, price, color, url, count)
                            store.basket.push(item)
                            setCount(1)
                            console.log(count)
                            console.log(store.basket)
                            CatalogItemMenu.current.classList.toggle(classes.slide_slidemenu_open)
                        }
                        } className={classes.slide_button}>
                            <a className={classes.button_price}>{price}₽</a>
                            <img className={classes.button_icon} src="/assets/img/iconContainer.png"></img>
                        </button>
                    </div>
                    <Link to='/basket' className={classes.counter_container}>
                        <button onClick={() => {
                            CatalogItemMenu.current.classList.toggle(classes.slide_slidemenu_open)
                        }
                        } className={classes.slide_button_goto_basket}>
                            <a className={classes.button_price}>В корзину</a>
                            <img className={classes.button_icon} src="/assets/img/market_icon.png"></img>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default StickySlide;
