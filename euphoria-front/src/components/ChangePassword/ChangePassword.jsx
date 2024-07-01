import { useEffect, useState } from "react";
import { axiosFunction } from "../../api";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { t } = useTranslation();
  const navigate= useNavigate();
  const [userPassword, setUserPassword] = useState("");
  console.log(userPassword);
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  console.log(userConfirmPassword);
  const userEmail = localStorage.getItem("user_email");

  useEffect(() => {
    console.log(userPassword);
    console.log(userConfirmPassword);
  }, [userPassword, userConfirmPassword])

  const changePassword = async () => {
    try {
      const response = await axiosFunction(
        "POST",
        `/user/change-password/${userEmail}`,
        {
          password: userPassword,
          confirmPassword: userConfirmPassword
        }
      );
      console.log(response);
      navigate('/auth/sign-in')
    } catch (error) {
      console.log("There has an error:", error.message);
    }
  };
  return (
    <div>
      <p>{t("New Password")}</p>
      <input
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <p>{t("Confirm Password")}</p>
      <input
        type="password"
        value={userConfirmPassword}
        onChange={(e) => setUserConfirmPassword(e.target.value)}
      />
      <button onClick={changePassword}>{t("Reset Password")}</button>
    </div>
  );
};

export default ChangePassword;
