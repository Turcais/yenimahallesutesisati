import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pImg1 from '../../images/pillars/1.jpg'
import pImg2 from '../../images/pillars/2.jpg'
import pImg3 from '../../images/pillars/3.jpg'
import pImg4 from '../../images/pillars/4.jpg'
import pImg5 from '../../images/pillars/5.jpg'
import pImg6 from '../../images/pillars/6.jpg'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const Pillars = [
    {
        Pimg: pImg5,
        title: 'Tuvalet Açma',
    },
    {
        Pimg: pImg6,
        title: 'Su Kaçağı Tespiti',
    },
    {
        Pimg: pImg3,
        title: 'Pimaş Açma',
    },
    {
        Pimg: pImg4,
        title: 'Lavabo Açma',
    },
    {
        Pimg: pImg2,
        title: 'Kalebodur Fayans Döşeme Ustası',
    },
    {
        Pimg: pImg1,
        title: 'Petek Temizliği',
    },

]

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
};



const PillarsSection = (props) => {

    const [open, setOpen] = React.useState(false);

    return (

        <section className={`pillars-section section-padding ${props.plClass}`}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="section-title">
                            <h2></h2>
                            <h2>Hizmetlerimiz</h2>
                            <h4>Hizmetlerimizin Detaylari Için WhatsApp Üzerinden Iletişime Geçebilirsiniz</h4>
                        </div>
                    </div>
                </div>
                <div className="pillars-wrap">
                    <div className="pillars-slider">
                        <Slider {...settings}>
                            {Pillars.map((image, i) => (
                                <div className="pillars-card" key={i}>
                                    <div className="image" onClick={() => setOpen(true)}>
                                        <img src={image.Pimg} alt="" />
                                        <div className="popup-icon">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </div>
                                    <h2>
                                        {image.title}
                                    </h2>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                ]}
            />
        </section>
    )
}

export default PillarsSection;