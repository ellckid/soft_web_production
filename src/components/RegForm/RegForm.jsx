import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useState } from "react";
import { context } from "../..";

import classes from "./RegForm.module.css"
import { Link } from "react-router-dom";

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { store } = useContext(context);
    const [PassState, setPassState] = useState('password');
    const [eyeURL, setEyeURL] = useState('/assets/img/eyes.png')
    const [auth_status, setSatus] = useState('')


    function changePassStat() {
        if (PassState == 'password') {
            setPassState('text');
            setEyeURL('/assets/img/closed.png');
        }
        if (PassState == 'text') {
            setPassState('password')
            setEyeURL('/assets/img/eyes.png');
        }
    }

    return (
        <div className={classes.input}>
            <div className={classes.input_container}>
                <h1 className={classes.auth_title}>Регистрация</h1>
                <h5 className={classes.auth_description}>Пожалуйста введите ваши данные</h5>
                <h6 className={classes.auth_status}>{auth_status}</h6>

                <input
                    className={classes.email_input}
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type='text'
                    placeholder="Имя"
                /><input
                    className={classes.email_input}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type='text'
                    placeholder="Email"
                />
                <div className={classes.password_form}>
                    <input
                        className={classes.password_input}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type={PassState}
                        placeholder="Пароль"
                    />
                    <img className={classes.password_eye} onClick={() => changePassStat()} src={eyeURL} />
                </div>


                <button className={classes.button_active} onClick={() => {
                    store.registration(name, email, password);
                    if (!store.isActivated && email != '' && password != '') {
                        setTimeout(() => {
                            setSatus("вам на почту отправлено письмо, перейдите по ссылке и попробуйте еще раз ")
                        }, 500);
                    }
                    setTimeout(() => {
                        setSatus("Неправильные пароль или email ( ")
                    }, 500);



                }}>Зарегестрироваться</button>
                <Link className={classes.reg_button} to='/login'><button className={classes.button_unactive} href='/registration'>Войти</button></Link>
            </div>
        </div >
    )
}

export default observer(AuthForm);
