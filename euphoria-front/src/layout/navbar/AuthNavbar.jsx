import React from 'react'
import navStyle from "./navbar.module.scss"
import logo from "../../assets/imgs/Logo.svg"
import Languageoption from "../../components/language dropdown/language-dropdown"
// Dil deyisimi ucun
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
//
import { NavLink } from "react-router-dom"
function AuthNavbar() {
    // Dil deyisimi ucun
    const { t } = useTranslation();
    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }
    //

    return (
        <nav>
            <NavLink to={'/'}><img src={logo} /></NavLink>
            <input type="text" placeholder={t("Search")} />
            <ul className={navStyle.list}>
                <Languageoption onChange={e => handleClick(e)} />
                <NavLink to={'/auth/sign-in'}>{t("Login")}</NavLink>
                <NavLink to={'/auth/sign-up'}>{t("Sign Up")}</NavLink>
            </ul>
        </nav>
    )
}

export default AuthNavbar