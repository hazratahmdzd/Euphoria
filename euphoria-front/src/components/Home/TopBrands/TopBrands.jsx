import React from 'react'
import topBrandsStyle from './TopBrands.module.scss'
import nike from '../../../../public/img/nike (2).png'
import hm from '../../../../public/img/hm.png'
import levis from '../../../../public/img/levis.png'
import uspolo from '../../../../public/img/uspolo.png'
import puma from '../../../../public/img/puma.png'

const TopBrands = () => {
  return (
    <div className={topBrandsStyle.topBrands}>
        <div className={topBrandsStyle.topBrandsText}>
          <h1>Top Brands Deal</h1>
          <p>Up To <span style={{color:"#FBD103"}}>60%</span> off on brands</p>
        </div>
        <div className={topBrandsStyle.topBrandsImg}>
          <img src={nike} alt="nike" />
          <img src={hm} alt="hm" />
          <img src={levis} alt="levis" />
          <img src={uspolo} alt="uspolo" />
          <img src={puma} alt="puma" />
        </div>
    </div>
  )
}

export default TopBrands
