import React from 'react'
import HomeSlide from '../../components/Home/Slide/HomeSlide'
import AuthNavbar from '../../layout/navbar/AuthNavbar'
import SaleProducts from '../../components/Home/SaleProducts/SaleProducts'

export const Home = () => {
  return (
    <>
      <AuthNavbar />
      <HomeSlide />
      <SaleProducts />
    </>
  )
}
