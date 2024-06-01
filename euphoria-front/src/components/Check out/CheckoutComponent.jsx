import React, { useState } from 'react'
import style from "./style.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

function CheckoutComponent() {
    const { t } = useTranslation();
    const [error, setError] = useState("")

    async function handleSubmit(values) {
        try {
            console.log(values);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={style.checkout}>
            <div className={style.urlList}>
                <Link to={"/"}>{t("Home")} <img src="/img/arrow.png" alt="" /></Link>
                <Link to={"/my-account"}>{t("My Account")} <img src="/img/arrow.png" alt="" /></Link>
                <li>{t("Check Out")}</li>
            </div>
            <h2><div></div> {t("Check Out")}</h2>

            <div className={style.container}>
                <div className={style.billingDetails}>
                    <h3>{t("Billing Details")}</h3>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', country: "", companyName: "", streetAddress: "", apt_suite_unit: "", city: "", state: '', postalCode: "", phone: "", saveInfo: false }}
                        validationSchema={Yup.object({
                            firstName: Yup.string().required("*"),
                            lastName: Yup.string().required("*"),
                            country: Yup.string().required("*"),
                            companyName: Yup.string(),
                            apt_suite_unit: Yup.string(),
                            streetAddress: Yup.string().required("*"),
                            city: Yup.string().required("*"),
                            state: Yup.string().required("*"),
                            postalCode: Yup.string().required("*"),
                            phone: Yup.string().required("*"),
                            saveInfo: Yup.boolean(),
                        })}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ errors, touched }) => (
                            <Form className={style.formDiv}>
                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="firstName">{t("First Name")}*</label>
                                        <Field className={`${style.inp} ${errors.firstName && touched.firstName && style.errorInp}`} name="firstName" type="text" placeholder="First Name" />
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="lastName">{t("Last Name")}*</label>
                                        <Field className={`${style.inp} ${errors.lastName && touched.lastName && style.errorInp}`} name="lastName" type="text" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="country">{t("Country / Region")}*</label>
                                        <Field className={`${style.inp} ${errors.country && touched.country && style.errorInp}`} name="country" type="text" placeholder="Country / Region" />
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="company">{t("Company Name")}</label>
                                        <Field className={`${style.inp} ${errors.company && touched.company && style.errorInp}`} name="company" type="text" placeholder="Company (optional)" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="streetAddress">{t("Street Address")}*</label>
                                        <Field className={`${style.inp} ${errors.streetAddress && touched.streetAddress && style.errorInp}`} name="streetAddress" type="text" placeholder="House number and street name" />
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="apt_suite_unit">{t("Apt, suite, unit")}</label>
                                        <Field className={`${style.inp} ${errors.apt_suite_unit && touched.apt_suite_unit && style.errorInp}`} name="apt_suite_unit" type="text" placeholder="apartment, suite, unit, etc. (optional)" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="city">{t("City")}*</label>
                                        <Field className={`${style.inp} ${errors.city && touched.city && style.errorInp}`} name="city" type="text" placeholder="Town / City" />
                                    </div>

                                    <div className={style.dropdown_container}>
                                        <label htmlFor="state">{t('State')}*</label>
                                        <Field as="select" name="state" id="state" className={`${style.dropdown_select} ${errors.state && touched.state && style.errorInp}`}>
                                            <option value="" disabled selected>{t('State')}</option>
                                            <option value="Azerbaijan">{t('Azerbaijan')}</option>
                                            <option value="Turkish">{t('Turkish')}</option>
                                            <option value="England">{t('England')}</option>
                                            <option value="Russia">{t('Russia')}</option>
                                            <option value="France">{t('France')}</option>
                                        </Field>
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="postalCode">{t("Postal Code")}*</label>
                                        <Field className={`${style.inp} ${errors.postalCode && touched.postalCode && style.errorInp}`} name="postalCode" type="text" placeholder="Postal Code" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="phone">{t("Phone")}*</label>
                                        <Field className={`${style.inp} ${errors.phone && touched.phone && style.errorInp}`} name="phone" type="number" placeholder="Phone" />
                                    </div>
                                </div>

                                {error ? <span className={style.errors} style={{ color: "#d91900" }}>{error}</span> : null}
                                <button id={style.submitbtn} type="submit">{t("Continue to delivery")}</button>

                                <div className={style.checkboxContainer}>
                                    <label>
                                        <Field type="checkbox" name="saveInfo"  />
                                        {t("Save my information for a faster checkout")}
                                    </label>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    
                </div>

                <div className={style.orderSummary}>

                </div>
            </div>
        </div>
    )
}

export default CheckoutComponent;
