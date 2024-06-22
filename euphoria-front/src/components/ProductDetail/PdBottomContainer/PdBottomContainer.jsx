import React from "react";
import pdBotStyle from "./PdBottomContainer.module.scss";
import hearticon from "/img/DetailPageimgs/pdhearticon.png";

const PdBottomContainer = () => {
  const pddata = [
    {
      imgurl: "/img/DetailPageimgs/pdwhitetshirt.png",
      productName: "White T-Shirt",
      brandName: "Priya's Brand",
      price: 13.0,
    },
    {
      imgurl: "/img/DetailPageimgs/pddarkgreenswe.png",
      productName: "Dark Green Sweatshirt...",
      brandName: "Roboto's Brand",
      price: 127.0,
    },
    {
      imgurl: "/img/DetailPageimgs/pdlavenderswe.png",
      productName: "Lavender Sweatshirt...",
      brandName: "Jhanvi's Brand",
      price: 133.0,
    },
    {
      imgurl: "/img/DetailPageimgs/pdurbanjacket.png",
      productName: "Urban jacket with white...",
      brandName: "Sagar's Brand",
      price: 79.0,
    },
    {
      imgurl: "/img/DetailPageimgs/pdplainwhitetshirt.png",
      productName: "Plain White T-Shirt",
      brandName: "Jhanvi's Brand",
      price: 123.0,
    },
    {
      imgurl: "/img/DetailPageimgs/pdchecksshirt.png",
      productName: "Checks Shirt with white...",
      brandName: "H.M's Brand",
      price: 123.0,
    },
    {
      imgurl: "/img/DetailPageimgs/pdonepiecetop.png",
      productName: "One piece black top &...",
      brandName: "Nike's Brand",
      price: 123.0,
    },
    {
      imgurl: "/img/DetailPageimgs/pddenimblueshirt.png",
      productName: "Denim Blue Shirt",
      brandName: "MOMO's Brand",
      price: 38.0,
    },
  ];

  return (
    <div className={pdBotStyle.pdBottomContainer}>
      <div className={pdBotStyle.pdh2holder}>
        <div className={pdBotStyle.pdSimilarProddiv}></div>
        <h2>Similar Products</h2>
      </div>
      <div className={pdBotStyle.pdproductscontainer}>
        {pddata.map((p, index) => (
          <div className={pdBotStyle.pdproductcard} key={index}>
            <div className={pdBotStyle.pdcardimg}>
              <img src={p.imgurl} alt={p.productName} />
              <div className={pdBotStyle.pdwishicon}>
                <img
                  src={hearticon}
                  alt="hearticon"
                  style={{ width: "15px", height: "15px" }}
                />
              </div>
            </div>
            <div className={pdBotStyle.pdcardtext}>
              <div className={pdBotStyle.pdcardps}>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#3C4242",
                    fontWeight: "600",
                  }}
                >
                  {p.productName}
                </p>
                <p style={{ fontSize: "15px", color: "#807D7E" }}>
                  {p.brandName}
                </p>
              </div>
              <div className={pdBotStyle.pdcardprice}>
                <p
                  style={{
                    width: "70px",
                    height: "25px",
                    backgroundColor: "#F6F6F6",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  ${p.price}.00
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdBottomContainer;
