import resetPasswordStyle from "./resetpassword.module.scss";
import respassimg from "../../../../public/img/respassimg.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { axiosFunction } from "../../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState( "" );
  console.log(userEmail);

  const verifyEmail = async () => {
    try {
      const response = await axiosFunction("POST", "/user/verify-email", {
        email: userEmail,
      });
      console.log(response);
      if (response) {
        localStorage.setItem('user_email',userEmail);
        navigate('/verify-otp')
      }
      setUserEmail("");
    } catch (error) {
      console.log("There has an error:", error.message);
    }
  };


  return (
    <div className={resetPasswordStyle.resetPassword}>
      <img src={respassimg} alt="resetpswimg" />
      <div className={resetPasswordStyle.resetPasswordContainer}>
        <div className={resetPasswordStyle.rpcInside}>
          <h2>{t("Reset Your Password")}</h2>
          <p className={resetPasswordStyle.p1}>
            {t(
              "Enter your email and we`ll send you a link to reset your password."
            )}
          </p>
          <p className={resetPasswordStyle.p2}>{t("Please check it.")}</p>

              <div>
                <p>{t("Email")}</p>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) =>
                    setUserEmail(e.target.value)
                  }
                />
              </div>
              <button onClick={verifyEmail}>{t("Send")}</button>


          <p className={resetPasswordStyle.p3}>
            {t("Back to")} <Link to="/auth/sign-in">{t("Login")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

//*sual: change password requesti dogrudurmu(umumiyyetle hamisi?)-change
//*passwordda 400 erroru verir diger postlardan gelen cavablara da bax
//*varsa error
