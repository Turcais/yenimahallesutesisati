import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import EventSectionS2 from '../../components/EventSectionS2/EventSectionS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const EventPageS2 = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Events'} pagesub={'Events'} />
            <EventSectionS2/>
            <Footer ftClass={'s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default EventPageS2;
