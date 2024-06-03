import React from 'react';
import productDetailStyle from './ProductDetail.module.scss'
import ravenhoodieblack from '../../../public/img/DetailPageimgs/ravenhoodieblack.png' 
import leftstroke from '../../../public/img/DetailPageimgs/left (Stroke).png'
import stars from '../../../public/img/DetailPageimgs/pdStar.png'

const ProductDetail = () => {
  return (
    <div className={productDetailStyle.pdContainer}>
        <div className={productDetailStyle.upContainer}>
          <div className={productDetailStyle.pdImages}>
            <div className={productDetailStyle.pdLeftImg}>
            
            </div>
            <div className={productDetailStyle.pdRightImg}>
              <img className={productDetailStyle.pdrImg} src={ravenhoodieblack} alt="ravenhoodieblack" />
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

            </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail