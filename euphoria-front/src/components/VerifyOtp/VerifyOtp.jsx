import { useState } from "react";
import { axiosFunction } from "../../api";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const { t } = useTranslation();
  const navigate= useNavigate();
  const [otp, setOtp] = useState(0);
  console.log(otp);
  const userEmail = localStorage.getItem("user_email");
  const verifyOtp = async () => {
    try {
      const response = await axiosFunction("POST", "/user/verify-otp", {
        email: userEmail,
        otp: otp,
      });
      console.log(response);
      if (response) {
        navigate('/change-password')
      }
      setOtp(0);
    } catch (error) {
      console.log("There has an error:", error.message);
    }
  };
  return (
    <div>
      <p>{t("OTP")}</p>
      <input
        type="number"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>{t("Verify OTP")}</button>
    </div>
  );
};

export default VerifyOtp;
