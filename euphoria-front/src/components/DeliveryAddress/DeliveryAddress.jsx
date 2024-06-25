import React from "react";
import { useTranslation } from "react-i18next";
import deliveryAddress from "./DeliveryAddress.module.scss";

function DeliveryAddress() {
  const { t } = useTranslation();
  // const [inputType, setInputType] = useState("password");
  // const [termsChecked, setTermsChecked] = useState(false);
  // const [newsletterChecked, setNewsletterChecked] = useState(false);

  // const toggleInputType = () => {
  //   setInputType(inputType === "password" ? "text" : "password");
  // };


  // const initialValues = {
  //   email: "",
  //   password: "",
  // };
  return (
    <div className={deliveryAddress.container}>
      <div className={deliveryAddress.titlecontainer}>
        <h1 className={deliveryAddress.title}>{t("My Info")}</h1>
        <p className={deliveryAddress.subtitle}>{t("Add Address")}</p>
      </div>
      <div className={deliveryAddress.maincontainer}>
        <ul className={deliveryAddress.adressList}>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("First Name*")}</p>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Last Name*")}</p>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("Country / Region*")}</p>
                <input type="text" placeholder="Country / Region" />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Company Name*")}</p>
                <input type="text" placeholder="Company (optional)" />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("Street Address*")}</p>
                <input type="text" placeholder="House number and street name" />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Apt, suite, unit*")}</p>
                <input
                  type="text"
                  placeholder="apartment, suite, unit, etc. (optional)"
                />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("City*")}</p>
                <input type="text" placeholder="Town / City" />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("State*")}</p>
              <select id="state" name="state">
                <option value="">{t("State")}</option>
                <option value="2">{t("State")}</option>
                <option value="3">{t("State")}</option>
              </select>
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("Phone*")}</p>
                <input type="text" placeholder="Phone" />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Postal Code*")}</p>
                <input
                  type="text"
                  placeholder="Postal Code"
                />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainers}>
                <p>{t("Delivery Instruction")}</p>
                <textarea name="txt" id="txt" className={deliveryAddress.txt} placeholder="Delivery Instruction"></textarea>
            </div>
          </li>
        </ul>
        <div className={deliveryAddress.chechkbox}>
          <div className={deliveryAddress.chck}>
            <input type="checkbox" name="" id="" />
            <p>{t("Set as default shipping address")}</p>
          </div>
          <div className={deliveryAddress.chck}>
            <input type="checkbox" name="" id="" />
            <p>{t("Set as default billing address")}</p>
          </div>
        </div>
        <div className={deliveryAddress.buttons}>
          <button className={deliveryAddress.btnSave}>{t("Save")}</button>
          <button className={deliveryAddress.btnCancel}>{t("Cancel")}</button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
