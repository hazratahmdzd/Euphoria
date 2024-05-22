import React from "react";
import HomeSlide from "../../components/Home/Slide/HomeSlide";
import SaleProducts from "../../components/Home/SaleProducts/SaleProducts";
import FashionSection from "../../components/Home/FashionSection/FashionSection";
import NewArrival from "../../components/Home/NewArrival/NewArrival";
import Footer from "../../layout/footer/Footer";
import HomeNavbar from "../../layout/navbar/HomeNavbar";
import BigZone from "./BigZone";

export const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeSlide />
      <SaleProducts />
      <NewArrival />
      <BigZone />
      <FashionSection />
      <Footer />
    </>
  );
};
