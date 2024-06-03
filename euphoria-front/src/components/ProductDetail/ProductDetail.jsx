import React from 'react';
import productDetailStyle from './ProductDetail.module.scss'
import ravenhoodieblack from '../../../public/img/CategoriesForMen/' 
const ProductDetail = () => {
  return (
    <div className={productDetailStyle.pdContainer}>
        <div className={productDetailStyle.upContainer}>
          <div className={productDetailStyle.pdImages}>
            <div className={productDetailStyle.pdLeftImg}>
            
            </div>
            <div className={productDetailStyle.pdRightImg}>
            
            </div>
          </div>
          <div className={productDetailStyle.pdTexts}>
            
          </div>
        </div>
    </div>
  )
}

export default ProductDetail