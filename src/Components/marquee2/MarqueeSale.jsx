import React from 'react';
import Slider from 'react-slick';
import './marqueesale.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MarqueeSale() {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    variableWidth: true,
    pauseOnHover: false,
  };

  const reverseSettings = {
    ...settings,
    rtl: true,
  };

  const saleText = Array(20).fill("SALE").map((text, index) => (
    <div className="marquee-sale-text" key={index}>{text}</div>
  ));

  return (
    <div className="marquee-sale-container">
      <div className="marquee-sale-top">
        <Slider {...settings}>
          {saleText}
        </Slider>
      </div>
      <div className="marquee-sale-middle">
        <span className="marquee-sale-content">NEW ARRIVAL</span>
        <span className="marquee-sale-content">BEST SELLER</span>
        <span className="marquee-sale-content">GET UP TO 15% OFF</span>
        <span className="marquee-sale-content">NEW STYLE</span>
        <span className="marquee-sale-content">HOT BRANDS</span>
      </div>
      <div className="marquee-sale-bottom">
        <Slider {...reverseSettings}>
          {saleText}
        </Slider>
      </div>
      <div className="marquee-sale-middle-mobile">
        <span className="marquee-sale-content-mobile">NEW ARRIVAL</span>
      </div>
    </div>
  );
}

export default MarqueeSale;
