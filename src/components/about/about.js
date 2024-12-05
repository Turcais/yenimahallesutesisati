import React from 'react'
import { Link } from 'react-router-dom'
import abImg from '../../images/about-1.jpg'
import abImg2 from '../../images/about-2.jpg'
import icon from '../../images/phone-call.svg'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section">
            <div className="container">
                <div className="wrap">
                    <div className="left-img">
                        <div className="about-1">
                            <img src={abImg} alt=""/>
                        </div>
                        <div className="about-2">
                            <img src={abImg2} alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="content">
                                <div className="section-title">
                                    <h2>Biz Kimiz</h2>
                                    <h3>Alanında Öncü Teknolojiler İle</h3>
                                    <p>Evinizde veya ofisinizde oluşabilecek Su Kaçağı, Tuvalet Tıkanması, Lavabo Tıkanması, Pimaş Tıkanması yada kışın yüksek fatura sorunları getiren kirli ve ısınmayan petekler için petek temizliği hizmeti gibi tüm sorunlarda sizlere hızlı ve pratik çözümler sunmaktayız. Firmamız bünyesinde bulunan uzman ekibimiz ve profesyonel ekipmanlarımızla kırmadan dökmeden özel cihazlarımızla su kaçağı tespiti yapmaktadır.
                                        <br></br>Elde ettiğimiz deneyim ve tecrübemiz ile değerli müşterilerimizin problemlerini çözüyoruz.
                                    </p>
                                </div>
                                <div className="about-bottom">
                                    <Link onClick={ClickHandler} to={'/about'} className="theme-btn">Daha Fazlası</Link>

                                    <div className="call">
                                        <div className="icon">
                                            <img src={icon} alt=""/>
                                        </div>
                                        <div className="text">
                                            <span>Bizi Arayın:</span>
                                            <a href="tel:00905373711654">
                                                +(90) 537 371 16 54
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;