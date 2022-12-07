import React from "react";
import HeaderDark_a from "./UI/headers/header_dark_a";
import HeaderDark_u from "./UI/headers/header_dark_u";
import HeaderLight_a from "./UI/headers/header_light_a";
import HeaderLight_u from "./UI/headers/header_light_u";
import { useContext } from "react";
import { context } from "..";
const Header = ({ isLight }) => {
    const { store } = useContext(context)
    let isAuth = store.isAuth;
    if (isLight == true && isAuth == true) {
        return <HeaderLight_a />
    } else if (isLight == true && isAuth == false) {
        return <HeaderLight_u />
    } else if (isLight == false && isAuth == false) {
        return <HeaderDark_u />
    } else if (isLight == false && isAuth == true) {
        return <HeaderDark_a />
    }
}
export default Header;
