import React from 'react'
import fashionSectionStyle from './FashionSection.module.scss'
import { Link } from "react-router-dom";

function FashionSection() {
  return (
    <div className={fashionSectionStyle.container}>
        <div>
      <div className={fashionSectionStyle.lftContainer}>
        <div>
            <h4>WE MADE YOUR EVERYDAY FASHION BETTER!</h4>
            <p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
           <Link>Shop Now</Link>
        </div>
      </div>
        <img src="/img/fashionpctr.png" alt="..." />
      </div>
    </div>
  )
}

export default FashionSection
