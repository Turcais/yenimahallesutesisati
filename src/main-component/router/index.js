import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import EventPage from '../EventPage/EventPage';
import EventPageS2 from '../EventPageS2/EventPageS2';
import EventSinglePage from '../EventSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';

import ProductSinglePage from '../ProductSinglePage';

import OrderRecived from '../OrderRecived';

import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import Contactin from '../../components/hero/contact';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />
        
          <Route path="service" element={<ServicePage />} />
          <Route path="service-s2" element={<ServicePageS2 />} />
          <Route path="Contactin" element={<Contactin />} />

          
          <Route path='product-single/:slug' element={<ProductSinglePage />} />
        
          <Route path='order_received' element={<OrderRecived />} />
       
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<ErrorPage />} />
          <Route path='forgot' element={<ErrorPage />} />
          <Route path="event" element={<EventPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
