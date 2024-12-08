import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import PillarsSection from '../../components/PillarsSection/PillarsSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import PrayerTime from '../../components/PrayerTime/PrayerTime';
import EventSection from '../../components/EventSection/EventSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Hakkımızda'} pagesub={'About'} />
            <About/>
            <EventSection/>
            <PillarsSection/>
            
            <ServiceSection/>
            <PrayerTime/>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
