import React from "react";
import productDetailStyle from "../../components/ProductDetail/productdetail.module.scss";
import ravenhoodieblack from "../../../public/img/DetailPageimgs/ravenhoodieblack.png";
import leftstroke from "../../../public/img/DetailPageimgs/left (Stroke).png";
import stars from "../../../public/img/DetailPageimgs/pdStar.png";
import messageicon from "../../../public/img/DetailPageimgs/messageIcon.png";
import pdarrow from "../../../public/img/DetailPageimgs/pdarrow.png";
import pdcartbtn from "../../../public/img/DetailPageimgs/pdcartbtn.png";
import pdsecpay from "../../../public/img/DetailPageimgs/pdsecpay.png";
import pdfreeship from "../../../public/img/DetailPageimgs/pdfreeship.png";
import pdsizefit from "../../../public/img/DetailPageimgs/pdsizefit.png";
import pdfreeret from "../../../public/img/DetailPageimgs/pdfreeret.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pdsliderimg1 from "../../../public/img/DetailPageimgs/pdsliderimg1.png";
import pdsliderimg2 from "../../../public/img/DetailPageimgs/pdsliderimg2 (2).png";
import pdsliderimg3 from "../../../public/img/DetailPageimgs/pdsliderimg3.png";
import pdvideoimg from "../../../public/img/DetailPageimgs/pdvideoimg.png";
import hearticon from "../../../public/img/DetailPageimgs/pdhearticon.png";

const ProductDetail = () => {
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

  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "20px",
          height: "20px",
          fontSize: "20px",
          textAlign: "center",
          position: "absolute",
          top: "103%",
          right: "42%",
          transform: "rotate(-90deg)",
          display: "block",
          background: "gray",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "20px",
          height: "20px",
          fontSize: "20px",
          textAlign: "center",
          position: "absolute",
          top: "114%",
          left: "30%",
          transform: "rotate(-90deg)",
          display: "block",
          background: "gray",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    vertical: true,
    verticalSwiping: true,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className={productDetailStyle.pdContainer}>
      <div className={productDetailStyle.upContainer}>
        <div className={productDetailStyle.pdImages}>
          <div className={productDetailStyle.pdLeftImg}>
            <div className={productDetailStyle.pdSliderContainer}>
              <Slider {...settings} className={productDetailStyle.pdsldr}>
                <div className={productDetailStyle.pdSlider}>
                  <img src={pdsliderimg1} alt="sliderimg" />
                </div>
                <div className={productDetailStyle.pdSlider}>
                  <img src={pdsliderimg2} alt="sliderimg" />
                </div>
                <div className={productDetailStyle.pdSlider}>
                  <img src={pdsliderimg3} alt="sliderimg" />
                </div>
              </Slider>
            </div>
          </div>
          <div className={productDetailStyle.pdRightImg}>
            <img
              className={productDetailStyle.pdrImg}
              src={ravenhoodieblack}
              alt="ravenhoodieblack"
            />
          </div>
        </div>
        <div className={productDetailStyle.pdTexts}>
          <div className={productDetailStyle.pdInTexts}>
            <div className={productDetailStyle.pdtextlinks}>
              <span>Shop</span>
              <img src={leftstroke} alt="leftstroke" />
              <span>Women</span>
              <img src={leftstroke} alt="leftstroke" />
              <span>Top</span>
            </div>
            <p className={productDetailStyle.pdInTextsp}>
              <p>Raven Hoodie With</p>
              <p>Black colored Design</p>
            </p>
            <div className={productDetailStyle.pdStarsComments}>
              <div className={productDetailStyle.pdStars}>
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <img src={stars} alt="stars" />
                <span>3.5</span>
              </div>
              <div className={productDetailStyle.pdComments}>
                <img src={messageicon} alt="messageicon" />
                <span>120 comment</span>
              </div>
            </div>
            <div className={productDetailStyle.pdsizes}>
              <div className={productDetailStyle.inpdsizes}>
                <span>Select Size</span>
                <div className={productDetailStyle.arrowandsp}>
                  <span>Size Guide</span>
                  <img src={pdarrow} alt="arrow" />
                </div>
              </div>
              <div className={productDetailStyle.sizes}>
                <input type="button" value="XS" />
                <input type="button" value="S" />
                <input type="button" value="M" />
                <input type="button" value="L" />
                <input type="button" value="XL" />
              </div>
              <div className={productDetailStyle.colors}>
                <p>Colours Available</p>
                <div className={productDetailStyle.inputs}>
                  <label htmlFor="blackradiobtn">
                    <input
                      className={productDetailStyle.blackinput}
                      type="radio"
                      id="blackradiobtn"
                      name="color"
                    />
                    <span
                      className={productDetailStyle.custom_radio}
                      style={{ backgroundColor: "#3C4242" }}
                    ></span>
                  </label>
                  <label htmlFor="yellowradiobtn">
                    <input
                      className={productDetailStyle.yellowinput}
                      type="radio"
                      id="yellowradiobtn"
                      name="color"
                    />
                    <span
                      className={productDetailStyle.custom_radio}
                      style={{ backgroundColor: "#EDD146" }}
                    ></span>
                  </label>
                  <label htmlFor="pinkradiobtn">
                    <input
                      className={productDetailStyle.pinkinput}
                      type="radio"
                      id="pinkradiobtn"
                      name="color"
                    />
                    <span
                      className={productDetailStyle.custom_radio}
                      style={{ backgroundColor: "#EB84B0" }}
                    ></span>
                  </label>
                  <label htmlFor="redradiobtn">
                    <input
                      className={productDetailStyle.redinput}
                      type="radio"
                      id="redradiobtn"
                      name="color"
                    />
                    <span
                      className={productDetailStyle.custom_radio}
                      style={{ backgroundColor: "#9C1F35" }}
                    ></span>
                  </label>
                </div>
              </div>
              <div className={productDetailStyle.cartprice}>
                <button>
                  <img src={pdcartbtn} alt="cartbutton" />
                  <span>Add to cart</span>
                </button>
                <button>
                  <span>$63.00</span>
                </button>
              </div>
              <hr />
              <div className={productDetailStyle.pdshippinginfo}>
                <div>
                  <img src={pdsecpay} alt="icon" />
                  <span>Secure payment</span>
                </div>
                <div>
                  <img src={pdsizefit} alt="icon" />
                  <span>Size & Fit</span>
                </div>
                <div>
                  <img src={pdfreeship} alt="icon" />
                  <span>Free shipping</span>
                </div>
                <div>
                  <img src={pdfreeret} alt="icon" />
                  <span>Free Shipping & Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={productDetailStyle.pdMiddleContainer}>
        <div className={productDetailStyle.pdmiddleleft}>
          <div className={productDetailStyle.pdh2holder}>
            <div className={productDetailStyle.pdProductdescdiv} ></div>
            <h2>Product Description</h2>
          </div>
          <div
            className={productDetailStyle.pddesccommans}
            style={{ display: "flex", gap: "27px", marginBottom: "40px" }}
          >
            <div className={productDetailStyle.pddesc}>
              <span>Description</span>
            </div>
            <div
              className={productDetailStyle.pdusercomm}
              style={{ display: "flex", gap: "10px" }}
            >
              <span>User comments</span>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#8A33FD",
                  color: "white",
                  fontSize: "11px",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                21
              </div>
            </div>
            <div
              className={productDetailStyle.pdqueans}
              style={{ display: "flex", gap: "10px" }}
            >
              <span>Question & Answer</span>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#3C4242",
                  color: "white",
                  fontSize: "11px",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                4
              </div>
            </div>
          </div>
          <div className={productDetailStyle.pdmiddlefttext} style={{marginBottom: "35px"}}>
            100% Bio-washed Cotton – makes the fabric extra soft & silky.
            Flexible ribbed crew neck. Precisely stitched with no pilling & no
            fading. Provide all-time comfort. Anytime, anywhere. Infinite range
            of matte-finish HD prints.
          </div>
          <div className={productDetailStyle.pdclothestyle}>
            <div>
              <p>Fabric</p>
              <p>Bio-washed Cotton</p>
            </div>
            <div>
              <p>Pattern</p>
              <p>Printed</p>
            </div>
            <div>
              <p>Fit</p>
              <p>Regular-fit</p>
            </div>
            <div>
              <p>Neck</p>
              <p>Round Neck</p>
            </div>
            <div>
              <p>Sleeve</p>
              <p>Half-sleeves</p>
            </div>
            <div>
              <p>Style</p>
              <p>Casual Wear</p>
            </div>
          </div>
        </div>
        <div className={productDetailStyle.pdmiddleright}>
          <img src={pdvideoimg} alt="video" />
        </div>
      </div>
      <div className={productDetailStyle.pdBottomContainer}>
        <div className={productDetailStyle.pdh2holder}>
          <div className={productDetailStyle.pdSimilarProddiv}></div>
          <h2>Similar Products</h2>
        </div>
        <div className={productDetailStyle.pdproductscontainer}>
          {pddata.map((p, index) => (
            <div className={productDetailStyle.pdproductcard} key={index}>
              <div className={productDetailStyle.pdcardimg}>
                <img src={p.imgurl} alt={p.productName} />
                <div className={productDetailStyle.pdwishicon}>
                  <img
                    src={hearticon}
                    alt="hearticon"
                    style={{ width: "15px", height: "15px" }}
                  />
                </div>
              </div>
              <div className={productDetailStyle.pdcardtext}>
                <div className={productDetailStyle.pdcardps}>
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
                <div className={productDetailStyle.pdcardprice}>
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
    </div>
  );
};

export default ProductDetail;

//* SLICK-SLIDER-IN ARROW ICON-LARINI NECE STYLE ETMEK?
//* SLICK-SLIDER-IN ÖLÇÜSÜNÜ BÖYÜTMƏK NECƏ?
//* price-in 00-lari gorunmur
