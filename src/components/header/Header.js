import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../../images/logo.png';
import { totalPrice } from '../../utils';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';
import sIcon from '../../images/add-to-cart.svg';
import WhatsAppIcon from '../../images/whatsapp-icon.svg'; // WhatsApp icon path

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const openWhatsApp = () => {
        const phoneNumber = '905373711654'; // Your WhatsApp number with country code
        const message = encodeURIComponent('Merhaba! Size nasıl yardımcı olabilirim?');
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank'); // Open WhatsApp link in new tab
    };

    const { carts } = props;

    return (
        <header id="header" className={props.hclass}>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                                        <img src={Logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close">
                                        <i className="ti-close"></i>
                                    </button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} className="active" to="/">
                                                Anasayfa
                                            </Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/service-s2">
                                                Hizmetler
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                Hakkımızda
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/contact">
                                                İletişim
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-2 col-2">
                                <div className="whatsapp-icon" onClick={openWhatsApp} style={{ cursor: 'pointer' }}>
                                    <img src={WhatsAppIcon} alt="WhatsApp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
