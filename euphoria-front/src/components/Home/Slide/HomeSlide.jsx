import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideStyle from "./slide.module.scss"
import { Link } from "react-router-dom"

function HomeSlide() {
    return (
        <div id='slide-show' className={SlideStyle.slideShow}>
            <Slide
                autoplay={true}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >
                <div className={SlideStyle.each_slide_effect}>
                    <div className={SlideStyle.container} style={{ backgroundImage: 'url(/img/slideImg1.jpg)', backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
                        <div className={SlideStyle.text}>
                            <h3>T-shirt / Tops</h3>
                            <h2>Summer Value Pack</h2>
                            <h3>cool / colorful / comfy</h3>
                            <Link to={"/shop"}>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className={SlideStyle.each_slide_effect}>
                    <div className={SlideStyle.container} style={{ backgroundColor: "#FDC75D", backgroundImage: 'url(/img/slideImg2.jpg)', backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
                        <div className={SlideStyle.text}>
                            <h3>Beyoung Presents</h3>
                            <h2>Breezy Summer Style</h2>
                            <h3>UPTO 50% OFF</h3>
                            <Link to={"/shop"}>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default HomeSlide