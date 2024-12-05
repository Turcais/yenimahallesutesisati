import React from "react";
import { Link } from 'react-router-dom'
import Events from '../../api/events'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../images/event/time.svg";
import icon2 from "../../images/event/pin.svg";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const settings = {
    dots: false,
    arrows: true,
    loop:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            dots: true,
            arrows: false,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
        }
    },
]
};


const EventSectionS2 = (props) => {
    return (
        <section className="event-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="section-title">
                            <h2>Our Event</h2>
                            <h3>Our Upcoming Events</h3>
                        </div>
                    </div>
                </div>
                <div className="event-slider">
                    <Slider {...settings}>
                        {Events.map((event, evt) => (
                            <div className="event-single-card" key={evt}>
                                <div className="image">
                                    <img src={event.elImg} alt="" />
                                </div>
                                <div className="content">
                                    <h2 className="title"><Link onClick={ClickHandler} to={`/event-single/${event.slug}`}>{event.title}</Link></h2>
                                    <ul>
                                        <li><img src={icon1} alt="icon" /> {event.date} @ {event.time} </li>
                                        <li><img src={icon2} alt="icon" />{event.location}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default EventSectionS2;