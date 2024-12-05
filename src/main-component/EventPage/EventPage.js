import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const EventPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Events'} pagesub={'Events'} />
            <EventSection/>
            <BlogSection/>
            <Footer ftClass={'s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default EventPage;
