import React from "react";
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/1.png'
import icon from '../../images/slider/icon.svg'


const Hero3 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="static-hero-s2">
            <div className="container-fluid">
                <div className="content">
                    <div className="icon">
                        <img src={icon} alt="icon" />
                    </div>
                    <h2 className="title">Read! In the Name of your
                        Lord, Who has created</h2>
                    <span className="subtitle">The heart that beats for Allah is always a stranger among the hearts
                        that beat for the Dunya (world).</span>
                    <div className="hero-btn">
                        <Link onClick={ClickHandler} to="/about" className="theme-btn">Discover More</Link>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={hero1} alt="" />
            </div>
        </section>
    )
}

export default Hero3;