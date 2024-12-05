import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ServicePage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <ServiceSection/>
            <Footer ftClass={'s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
