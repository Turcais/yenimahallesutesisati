import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-2.png'
import Services from '../../api/Services';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="site-footer">
            <div className={`upper-footer ${props.ftClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="blog" />
                                </div>
                                <p>Alanında tecrübeli ekibimiz sizler için hazır!</p>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Hizmetler</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 6).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Hızlı Bağlantılar</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Anasayfa</Link></li>
                            
                                    <li><Link onClick={ClickHandler} to="/services">Hizmetler</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">Hakkımızda</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">İletişim</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <span></span>
                        
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2024 Görkem Tesisat by <Link onClick={ClickHandler} to="/">Turcais</Link>.
                                All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/contact">Gizlilik Politikası</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/contact">Şartlar</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/about">Hakkımızda</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;