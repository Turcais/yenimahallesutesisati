import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import PillarsSection from '../../components/PillarsSection/PillarsSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import PrayerTime from '../../components/PrayerTime/PrayerTime';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-4'} />
            <Hero />
            <About />
            <EventSection/>
            <PillarsSection />
            <ServiceSection />
            
           
          
           
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;