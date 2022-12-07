import React from "react"
import classes from './css/clouds.module.css'

function Clouds() {

    window.addEventListener('scroll', function () {
        let elem = document.getElementById('clouds');
        let value = window.scrollY;
        elem.style.left = '-' + (value * 1.4) + 'px';
    })
    return (
        <div id="clouds" className={classes.clouds_link}>
            <img className={classes.clouds_img} src='/assets/img/clouds.png' />
        </div>
    )
}

export default Clouds;
