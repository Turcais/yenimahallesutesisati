import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/Services'
import Events from '../../api/events'

const EventSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col col-lg-4 col-12">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {Events.slice(0, 3).map((event, eitem) => (
                            <div className="post" key={eitem}>
                                <div className="img-holder">
                                    <img src={event.eImg} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/event-single/${event.slug}`}>{event.title}</Link></h4>
                                    <span className="date">{event.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Services</h3>
                    </div>
                    <ul className="d-flex">
                        {Services.slice(0, 6).map((service, pitem) => (
                            <li className="grid" key={pitem}>
                                <div className="img-holder">
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                        <img src={service.sImg} alt="" />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Muslim</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Islamic</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Halal</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Community</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Ramadan</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">IslamicArt</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Donation</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">Help</Link></li>
                        <li><Link onClick={ClickHandler} to="/event-single/Exploring-Islamic-Insights-and-Wisdom">MuslimUnity</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default EventSidebar;