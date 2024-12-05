import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'


const Hero = () => {
    return (

        <section className="hero-slider hero-style-1">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>Allah makes the
                                        impossible possible</h2>
                                </div>
                                <div className="slide-text">
                                    <p>The heart that beats for Allah is always a stranger among the hearts
                                        that beat for the Dunya (world).</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Discover More<span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>Allah makes the
                                        impossible possible</h2>
                                </div>
                                <div className="slide-text">
                                    <p>The heart that beats for Allah is always a stranger among the hearts
                                        that beat for the Dunya (world).</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Discover More<span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero;