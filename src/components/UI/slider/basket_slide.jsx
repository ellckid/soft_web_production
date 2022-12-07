import React from 'react';
import Counter from '../counter/counter'
import classes from "./css/basket_slide.module.css"

const BasketSlide = ({ url, title, color, price, id, func, count }) => {

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
                <div className={classes.counter_container}>
                    <Counter func={func} count={count} func2={func} id={id} price={price} saveOrNot={true} />
                </div>
            </div>
        </div>
    );
};

export default BasketSlide;