import React from "react";
import { Link } from 'react-router-dom'
import Events from '../../api/events'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimeCountDown from "../countdown";
import { colors } from "@mui/material";



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const settings = {
    dots: false,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Otomatik kayma özelliği aktif
    autoplaySpeed: 5000, // Her 3 saniyede bir kayar
};


const EventSection = (props) => {
    return (
        <section className="event-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="section-title">
                            <h3>Hizmet Politikamiz</h3>
                        </div>
                    </div>
                </div>
                <div className="event-active">
                    <Slider {...settings}>
                        {Events.map((event, evt) => (
                            <div className="event-wrap" key={evt}>
                                <div className="image-wrap">
                                    <div className="image">
                                        <img src={event.eImg} alt="" />
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <div className="content">
                                        <h3 className="title">{event.title}</h3>
                                        
                                        <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>{event.text}</p>
                                          
                                        <Link onClick={ClickHandler} to={`/event-single/${event.slug}`}></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default EventSection;