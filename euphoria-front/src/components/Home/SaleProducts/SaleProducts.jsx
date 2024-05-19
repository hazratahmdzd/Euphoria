import React from 'react'
import style from "./saleproduct.module.scss"
import { Link } from "react-router-dom"

function SaleProducts() {
    return (
        <div className={style.saleproduct}>
            <div className={style.container}>
                <div className={style.product} style={{ backgroundImage: "url(/img/saleProduct1.png)" }}>
                    <h4>Low Price</h4>
                    <h2>High Coziness</h2>
                    <h5>UPTO 50% OFF</h5>
                    <Link to={"/shop"}>Explore Items</Link>
                </div>
                <div className={style.product} style={{ backgroundImage: "url(/img/saleProduct2.png)" }}>
                    <h4>Beyoung Presents</h4>
                    <h2>Breezy Summer Style</h2>
                    <h5>UPTO 50% OFF</h5>
                    <Link to={"/shop"}>Explore Items</Link>
                </div>
            </div>
        </div>
    )
}

export default SaleProducts