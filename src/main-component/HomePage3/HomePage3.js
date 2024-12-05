import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero3 from '../../components/hero3/hero3';
import About3 from '../../components/about3/about3';
import PillarsSection from '../../components/PillarsSection/PillarsSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import EventSection from '../../components/EventSection/EventSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import PrayerTime from '../../components/PrayerTime/PrayerTime';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-s2'} />
            <Hero3 />
            <PrayerTime prClass={'prayertime-section-s3'}/>
            <About3 />
            <PillarsSection plClass={'pillars-section-s3 '}/>
            <FunFact />
            <ServiceSection />
            <Testimonial />
            <EventSection />
            <BlogSection />
            <Footer ftClass={'s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;