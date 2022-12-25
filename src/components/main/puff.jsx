import React from "react"
import classes from './css/puff.module.css'

function Puff() {

    return (
        <a className={[classes.puff, classes.no_user_select].join(" ")}>
            <div href="/catalog" className={[classes.puff_link_1, classes.no_user_select].join(" ")}></div>
            <div href="/catalog" className={[classes.puff_link_2, classes.no_user_select].join(" ")}></div>
            <img href="/catalog" className={[classes.puff_img, classes.no_user_select].join(" ")} src="/assets/img/puff.png" />
        </a >
    )
}

export default Puff;
