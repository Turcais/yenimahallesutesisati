import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/Hero2';
import About2 from '../../components/about2/about2';
import PillarsSection from '../../components/PillarsSection/PillarsSection';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import FunFact from '../../components/FunFact/FunFact';
import EventSectionS2 from '../../components/EventSectionS2/EventSectionS2';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import PrayerTime from '../../components/PrayerTime/PrayerTime';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-4'} />
            <Hero2 />
            <PrayerTime prClass={'prayertime-section-s2'}/>
            <About2 />
            <PillarsSection plClass={'pillars-section-s2'}/>
            <ServiceSectionS2 />
            <FunFact fnClass={'funfact-section-s2'}/>
            <EventSectionS2 />
            <Testimonial />
            <BlogSection />
            <Footer ftClass={'s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;