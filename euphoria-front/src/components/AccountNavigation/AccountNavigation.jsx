import React from 'react'
import style from "./style.module.scss"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function AccountNavigation() {
    const currentUser = "Jhanvi"
    const { t } = useTranslation()
    const location = useLocation()

    return (
        <div className={style.accountNav}>
            <div className={style.url}>
                <Link to={"/"}>{t("Home")} <img src="/img/arrow.png" alt="" /></Link>
                <Link to={"/my-account"}>{t("My Account")} <img src="/img/arrow.png" alt="" /></Link>
                {location.pathname === "/my-account/my-orders" ? <p>My Orders</p> : <></>}
                {location.pathname === "/my-account/wishlist" ? <p>Wishlist</p> : <></>}
                {location.pathname === "/my-account/my-info" ? <p>My info</p> : <></>}
                {location.pathname === "/my-account/sign-out" ? <p>Sign out</p> : <></>}
            </div>
            <div className={style.navContainer}>
                <h2><div></div> {t("Hello")} {currentUser}</h2>
                <p>{t("Welcome to your Account")}</p>
                <ul className={style.accountNavLinks}>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/my-orders"}>
                        <img src="/img/AccountNav/orders.png" alt="" /> {t("My Orders")}</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/wishlist"}><img src="/img/AccountNav/heart.png" alt="" /> {t("Wishlist")}</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/my-info"}><img src="/img/AccountNav/user.png" alt="" /> {t("My info")}</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}
                        to={"/my-account/sign-out"}><img src="/img/AccountNav/logout.png" alt="" /> {t("Sign out")}</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default AccountNavigation