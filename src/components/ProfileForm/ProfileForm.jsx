import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { context } from "../..";
import AuthService from "../../services/AuthService";

import classes from "./profile_form.module.css"
import { Link } from "react-router-dom";

const ProfileForm = () => {
    const { store } = useContext(context);
    const [password, setPassword] = useState('password')
    const [eyeURL, setEyeURL] = useState('/assets/img/eyes.png')



    const pass = store.user.password;
    function changePassStat() {
        if (password == 'password') {
            setPassword('text');
            setEyeURL('/assets/img/closed.png');
        }
        if (password == 'text') {
            setPassword('password')
            setEyeURL('/assets/img/eyes.png');
        }
    }

    return (
        <div className={classes.input}>
            <div className={classes.input_container}>
                <h1 className={classes.auth_title}>Мой профиль</h1>
                <h5 className={classes.auth_description}>Здесь находятся все ваши контактные данные</h5>
                <h6>Мое имя</h6>
                <input
                    className={classes.email_input}
                    // value={myname}
                    type='text'
                    placeholder="Name"
                    disabled
                />
                <h6>Мой email</h6>
                <input
                    className={classes.email_input}
                    // value={email}
                    type='text'
                    placeholder="Email"
                    disabled
                />
                <h6>Мой пароль</h6>
                <div className={classes.password_form}>
                    <a
                        className={classes.password_input}
                        value={pass}
                        type={password}
                        placeholder="Пароль"
                        disabled
                    />
                    <img className={classes.password_eye} onClick={() => changePassStat()} src={eyeURL} />
                </div>
                <a className={classes.reg_button} ><button className={classes.button_active} onClick={() => {


                }} href="">Выйти</button></a>
            </div>
        </div >
    )
}

export default observer(ProfileForm);
