import React from 'react'
import {Link} from 'react-router-dom'
import erimg from '../../images/error-404.png'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Aradığınız Sayfaya Ulaşılamadı</h3>
                                <p>Aradığınız sayfa silinmiş ya da var olmayan bir sayfa gibi görünüyor. Teknik Ekibimize Bildirilmiştir.</p>
                                <Link onClick={ClickHandler} to="/home" className="theme-btn"> Anasayfaya Dön</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;