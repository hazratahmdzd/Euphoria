import React from "react";
import newArrivalStyle from "./NewArrival.module.scss";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewArrival() {
  const { t } = useTranslation();

  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{ ...style,
      width: "20px",
      height: "20px",
      fontSize: "20px",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      display: "block",
      background: "gray",
      borderRadius: "100%" }}
      onClick={onClick}
  />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{ ...style,
      width: "20px",
      height: "20px",
      fontSize: "20px",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      display: "block",
      background: "gray",
      borderRadius: "100%" }}
      onClick={onClick}
  />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={newArrivalStyle.container}>
      <div className={newArrivalStyle.context}>
        <div className={newArrivalStyle.line}></div>
        <p>New Arrival</p>
      </div>
      <div className="slider-container">
        <Slider {...settings} className="sldr">
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img1.png" alt="slide imgages for react..." />
            <p>{t("Knitted Joggers")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img2.png" alt="slide imgages for react..." />
            <p>{t("Full Sleeve")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img3.png" alt="slide imgages for react..." />
            <p>{t("Active T-Shirts")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img4.png" alt="slide imgages for react..." />
            <p>{t("Urban Shirts")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img1.png" alt="slide imgages for react..." />
            <p>{t("Knitted Joggers")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img2.png" alt="slide imgages for react..." />
            <p>{t("Full Sleeve")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img3.png" alt="slide imgages for react..." />
            <p>{t("Active T-Shirts")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img4.png" alt="slide imgages for react..." />
            <p>{t("Urban Shirts")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img1.png" alt="slide imgages for react..." />
            <p>{t("Knitted Joggers")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img2.png" alt="slide imgages for react..." />
            <p>{t("Full Sleeve")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img3.png" alt="slide imgages for react..." />
            <p>{t("Active T-Shirts")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img4.png" alt="slide imgages for react..." />
            <p>{t("Urban Shirts")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img1.png" alt="slide imgages for react..." />
            <p>{t("Knitted Joggers")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img2.png" alt="slide imgages for react..." />
            <p>{t("Full Sleeve")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img3.png" alt="slide imgages for react..." />
            <p>{t("Active T-Shirts")}</p>
          </div>
          <div className={newArrivalStyle.sliderContainer}>
            <img src="/img/Img4.png" alt="slide imgages for react..." />
            <p>{t("Urban Shirts")}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NewArrival;