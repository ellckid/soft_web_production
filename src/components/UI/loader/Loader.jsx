import React, { useState } from 'react';
import classes from "./Loader.module.css"

const Loader = function () {
    return (
        <div className={classes.loader}>
            <div className={classes.loader_container}>
                <img className={classes.loader_img} src='/assets/img/loader.png'></img>
                <h1 className={classes.loader_title}>Загрузка</h1>
            </div>
        </div>
    )
}

export default Loader; 