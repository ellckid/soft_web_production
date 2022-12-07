import React from "react"
import classes from './css/puff.module.css'

function Puff() {

    return (
        <a className={classes.puff}>
            <div href="/catalog" className={classes.puff_link_1}></div>
            <div href="/catalog" className={classes.puff_link_2}></div>
            <img href="/catalog" className={classes.puff_img} src="/assets/img/puff.png" />
        </a >
    )
}

export default Puff;
