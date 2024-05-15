import React from "react";
import checkEmailStyle from "./checkemail.module.scss";
import chckImage from "../../assets/imgs/chckEmail.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CheckEmail() {
  const { t } = useTranslation();

  return (
    <div className={checkEmailStyle.checkEmail}>
      <img
        className={checkEmailStyle.image}
        src={chckImage}
        alt="check email image..."
      />
      <div className={checkEmailStyle.container}>
        <h2>{t("Check Email")}</h2>
        <p>
          {t(
            "Please check your email inbox and click on the provided link to reset your password . If you don’t receive email,"
          )}
          <Link>{t("Click here to resend")}</Link>
        </p>
        <div className={checkEmailStyle.loginContainer}>
          <i className="fa-solid fa-chevron-left"></i>
          <p>
            {t("Back to ")}
            <Link to={"/auth/sign-in"}>{t("Login")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckEmail;
