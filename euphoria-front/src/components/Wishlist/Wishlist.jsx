import React, { useState } from "react";
import style from "./style.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const data = [
  {
    imgUrl: "/img/Wishlist/img1.png",
    productName: "Blue Flower Print Crop Top",
    color: "Yellow",
    quantity: 1,
    price: "29.00",
  },
  {
    imgUrl: "/img/Wishlist/img2.png",
    productName: "Yellow Flower Print Dress ",
    color: "Yellow",
    quantity: 1,
    price: "78.00",
  },
  {
    imgUrl: "/img/Wishlist/img3.png",
    productName: "White Hoodie long sleeve",
    color: "White",
    quantity: 1,
    price: "134.00",
  },
  {
    imgUrl: "/img/Wishlist/img4.png",
    productName: "Brown men’s long sleeve T-shirt",
    color: "Brown",
    quantity: 1,
    price: "93.00",
  },
];

function Wishlist() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(data);

  const handleDelete = (productName) => {
    const updatedProducts = products.filter(
      (product) => product.productName !== productName
    );
    setProducts(updatedProducts);
  };

  return (
    <div className={style.wishlist}>
      {products.length !== 0 ? <h2>{t("Wishlist")}</h2> : <></>}
      {products.length !== 0 ? (
        <div className={style.wisContainer}>
          {products.map((product, i) => (
            <div className={style.product} key={i}>
              <div className={style.left}>
                <IoCloseOutline
                  onClick={() => handleDelete(product.productName)}
                />
                <img src={product.imgUrl} alt="" />
                <div className={style.text}>
                  <h3>{product.productName}</h3>
                  <h3>
                    {t("Color :")} <p>{product.color}</p>
                  </h3>
                  <h3>
                    {t("Quantity :")} <p>{product.quantity}</p>
                  </h3>
                  <h3>${product.price}</h3>
                </div>
              </div>
              <div className={style.right}>
                <h3>${product.price}</h3>
                <button>{t("Add to cart")}</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.emptyWishlist}>
          <div className={style.emptyImg}>
            <img src="/img/Wishlist/emptyWishlist.png" alt="" />
          </div>
          <h2>{t("Your wishlist is empty.")}</h2>
          <p>
            {t(
              "You don’t have any products in the wishlist yet. You will find a lot of interesting products on our Shop page."
            )}
          </p>
          <Link to={"/product-list"}>{t("Continue Shopping")}</Link>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
