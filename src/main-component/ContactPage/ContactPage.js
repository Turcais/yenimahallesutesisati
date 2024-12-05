import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'İletişim'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer ftClass={'s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

