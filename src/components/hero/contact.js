import React, { useState } from 'react';
import WhatsAppIcon from '../../images/whatsapp-icon.svg'; 
import PhoneIcon from '../../images/phone.png'; 

const Contactin = () => {
    const openWhatsApp = () => {
        const phoneNumber = '905373711654';
        const message = encodeURIComponent('Merhaba! Hizmetleriniz hakkında bilgi alabilir miyim?');
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="header-icons">
            
            <div className="whatsapp-icon" onClick={openWhatsApp}>
                <img src={WhatsAppIcon} alt="WhatsApp" />
            </div>
            <div className="phone-icon">
                <a href="tel:05373711654">
                    <img src={PhoneIcon} alt="Phone" />
                </a>
            </div>
        </div>
    );
};

export default Contactin;
