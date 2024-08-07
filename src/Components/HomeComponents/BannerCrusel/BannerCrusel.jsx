import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './bannercarusel.scss';
import { Link } from "react-router-dom";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import Marquee from "../../Marquee/Marquee";
import bannerfoto1 from "../../../assets/Images/main-banner-1.webp";
import bannerfoto2 from "../../../assets/Images/main-banner-4.webp";

function BannerCrusel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="banner-carousel">
      <Slider {...settings}>
        <div className="slide">
          <img src={bannerfoto1} alt="Slide 1" />
          <div className="slide-content">
            <h2>New Blanks Just Dropped</h2>
            <div className="button-group">
              <Link to="/mens" className="slide-button">MENS</Link>
              <Link to="/womens" className="slide-button special-button">WOMENS</Link>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src={bannerfoto2} alt="Slide 2" />
          <div className="slide-content">
            <h2>New Blanks Just Dropped</h2>
            <div className="button-group">
              <Link to="/mens" className="slide-button">MENS</Link>
              <Link to="/womens" className="slide-button">WOMENS</Link>
            </div>
          </div>
        </div>
      </Slider>
      <Marquee/>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdOutlineArrowBackIosNew />
    </div>
  );
}

export default BannerCrusel;
