import React from 'react';
import { useRef } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import BasketSlide from './basket_slide.jsx';
import classes from "./css/basket_slider.module.css";
const BasketSlider = ({ type, data, func, direction, ref, increment, decrement, delfunc }) => {
    return (
        <div className={classes.swiper}>
            <div className={classes.swiper_piper}>{
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

