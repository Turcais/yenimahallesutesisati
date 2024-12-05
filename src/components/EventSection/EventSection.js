import React from "react";
import { Link } from 'react-router-dom'
import Events from '../../api/events'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimeCountDown from "../countdown";
import icon1 from "../../images/event/time.svg";
import icon2 from "../../images/event/pin.svg";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const settings = {
    dots: false,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
};


const EventSection = (props) => {
    return (
        <section className="event-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="section-title">
                            <h2>Our Event</h2>
                            <h3>Our Upcoming Events</h3>
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
                                        <h2 className="title"><Link onClick={ClickHandler} to={`/event-single/${event.slug}`}>{event.title}</Link></h2>
                                        <ul>
                                            <li><img src={icon1} alt="icon" /> {event.date} @ {event.time} </li>
                                            <li><img src={icon2} alt="icon" />{event.location}</li>
                                        </ul>
                                        <div className="event-date">
                                            <TimeCountDown />
                                        </div>
                                        <Link onClick={ClickHandler} to={`/event-single/${event.slug}`} className="theme-btn">Join Now</Link>
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