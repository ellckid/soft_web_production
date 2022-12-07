import React from 'react';
import Swiper from 'react-id-swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Slide from './sticky_slide.jsx';
import classes from "./css/slider.module.css";
import { Link } from "react-router-dom";
const StickySlider = ({ type, data, func }) => {
    const params = {
        loop: true,
        direction: 'horizontal',
        slidesPerView: 3,
    }
    return (
        <div className={classes.swiper}>
            <div className={classes.catalog_title_container}>
                <Link className={classes.catalog_2_link} to="/catalog"><img className={classes.catalog_2_link_img} src="/assets/img/view_icon.png" /></Link>
                <h1 className={classes.catalog_2_title}>{type}</h1>
                <Link className={classes.catalog_2_link} to="/catalog-2"><img className={classes.catalog_2_link_img} src="/assets/img/allview_icon.png" /></Link>
            </div>
            <Swiper {...params}>
                {
                    data.map((item, id) => (
                        <div key={id}>
                            {/* добавляем слайд */}
                            <Slide title={item.title} color={item.color} url={item.url} delivery={item.delivery} price={item.price} func={func} id={id}>
                            </Slide>
                        </div>
                    ))
                }
            </Swiper >
        </div>



    );
}

export default StickySlider;

