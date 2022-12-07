import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { context } from "../../..";

import classes from "./css/myprofile.module.css"

const MyProfile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    if (store.user.isActivated) {
        return (
            <div className={classes.profile}>

                <div className={classes.inputs}>
                    <h3 className={classes.inputs_name_top} >Имя</h3>
                    <input
                        className={classes.email_input}
                        value={store.user.name}
                        type='text'
                        disabled
                    />
                    <h3 className={classes.inputs_name}>Email</h3>
                    <input
                        className={classes.email_input}
                        value={store.user.email}
                        type='text'
                        disabled
                    />
                    <span className={classes.email_auth}>Ваша почта <span className={classes.email_auth + ' ' + classes.green_color} >подтверждена</span></span>
                    <h3 className={classes.inputs_name}>Пароль</h3>
                    <div className={classes.password_form}>

                        <input
                            className={classes.password_input}
                            value={store.user.id}
                            type={PassState}
                            disabled
                        />
                        <img className={classes.password_eye} onClick={() => changePassStat()} src={eyeURL} />
                    </div>

                </div>
            </div >

        )
    }
    if (!store.user.isActivated) {
        return (
            <div className={classes.profile}>

                <div className={classes.inputs}>
                    <h3 className={classes.inputs_name_top} >Имя</h3>
                    <input
                        className={classes.email_input}
                        value={store.user.name}
                        type='text'
                        disabled
                    />
                    <h3 className={classes.inputs_name}>Email</h3>
                    <input
                        className={classes.email_input}
                        value={store.user.email}
                        type='text'
                        disabled
                    />
                    <span className={classes.email_auth}>К сожалению вы <span className={classes.email_auth + ' ' + classes.red_color} >не подтвердили</span> почту (</span>
                    <h3 className={classes.inputs_name}>Пароль</h3>
                    <div className={classes.password_form}>

                        <input
                            className={classes.password_input}
                            value={store.user.id}
                            type={PassState}
                            disabled
                        />
                        <img className={classes.password_eye} onClick={() => changePassStat()} src={eyeURL} />
                    </div>

                </div>
            </div >
        )
    }

}

export default MyProfile;
