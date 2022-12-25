import React from 'react';

import BasketSlide from './basket_slide.jsx';
import classes from "./css/basket_slider.module.css";
const BasketSlider = ({ type, data, func, direction, ref, increment, decrement, delfunc }) => {
    return (
        <div className={classes.basket_slider}>
            <div className={classes.basket_slider_container}>{
                data.map((item, id) => (
                    <div key={id}>
                        <BasketSlide
                            id={id}
                            title={item.title}
                            color={item.color}
                            url={item.url}
                            price={item.price}
                            count={item.count}
                            func={func}
                            delfunc={delfunc}
                        />
                    </div>
                ))
            }
            </div>
        </div >
    );
}

export default BasketSlider;

