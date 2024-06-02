import React from 'react'
import listBestPriceStyle from "./ListBestPrice.module.scss"
import { useTranslation } from "react-i18next";


function ListBestPrice() {
  const { t } = useTranslation();
  return (
    <div className={listBestPriceStyle.container}>
      <div className={listBestPriceStyle.row}>
      <div className={listBestPriceStyle.tcol}>
      <div className={listBestPriceStyle.line}></div>
          <h2 className={listBestPriceStyle.title}>
            {t("Buy Women's Clothing at Best Price")}
          </h2>
      </div>
      <div className={listBestPriceStyle.bodyCol}>
        <table border={0}>
        <thead>
          <tr>
            <th>Women's Clothing</th>
            <th>Best Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pick Any 4- Womens Plain T-shirt Combo</td>
            <td>₹1099</td>
          </tr>
          <tr>
            <td>Pick Any 4- Plain Womens Boxer Combo</td>
            <td>₹1099</td>
          </tr>
          <tr>
            <td>Pick Any 4 - Women Plain Full Sleeve T-shirt Combo</td>
            <td>₹1399</td>
          </tr>
          <tr>
            <td>Multicolor Checkered Long Casual Shirts for Women</td>
            <td>₹499</td>
          </tr>
          <tr>
            <td>Pick Any 2: Plain Boxy Casual Shirts for Women Combo</td>
            <td>₹799</td>
          </tr>
          <tr>
            <td>Blue Floral Anarkali Kurti</td>
            <td>₹599</td>
          </tr>
          <tr>
            <td>Jade Black Narrow Cut Flexible Women Jeggings</td>
            <td>₹998</td>
          </tr>
          <tr>
            <td>Mustard-yellow Solid Straight-Fit Women Pant</td>
            <td>₹449</td>
          </tr>
          <tr>
            <td>Women Pants Combo - Pick Any 2</td>
            <td>₹800</td>
          </tr>
          <tr>
            <td>Pista Green Solid Boxy Casual Shirts for Women</td>
            <td>₹449</td>
          </tr>
          <tr>
            <td>Plain Burgundy Womens Boxer</td>
            <td>₹349</td>
          </tr>
          <tr>
            <td>Striped Front Tie Casual Shirts for Women</td>
            <td>₹449</td>
          </tr>
        </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default ListBestPrice
