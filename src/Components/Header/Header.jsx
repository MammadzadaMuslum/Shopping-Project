import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.scss';
import logo from '../../assets/Images/logo-1.avif';
import { SlBasket } from 'react-icons/sl';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Spin as Hamburger } from 'hamburger-react';
import Hamburgermenu from '../hamburgermenu/Hamburgermenu';
import { useDisclosure } from '@chakra-ui/react';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const [isSearchOpen, setSearchOpen] = React.useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header>
        <nav>
          <div className="left">
            <Hamburger toggled={isOpen} toggle={onOpen} />
            <ul>
              <li className="dropdown">
                <Link to="#">MENS <IoIosArrowDown className='icn2' /> </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/mens/clothing">Clothing</Link></li>
                  <li><Link to="/mens/shoes">Shoes</Link></li>
                  <li><Link to="/mens/accessories">Accessories</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">WOMENS <IoIosArrowDown className='icn2' /></Link>
                <ul className="dropdown-menu">
                  <li><Link to="/womens/clothing">Clothing</Link></li>
                  <li><Link to="/womens/shoes">Shoes</Link></li>
                  <li><Link to="/womens/accessories">Accessories</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">THEMES <IoIosArrowDown className='icn2' /> </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/themes/summer">Summer</Link></li>
                  <li><Link to="/themes/winter">Winter</Link></li>
                  <li><Link to="/themes/spring">Spring</Link></li>
                </ul>
              </li>
              <li><Link to="/about-us">ABOUT US</Link></li>
              <li><Link to="/contact-us">CONTACT US</Link></li>
            </ul>
          </div>
          <div className="center">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="right">
            <div className={`search ${isSearchOpen ? 'open' : ''}`}>
              <CiSearch className='icn' onClick={toggleSearch} />
              <input type="text" />
            </div>
            <SlBasket style={{ fontSize: "20px" }} />
          </div>
        </nav>
        <div className="nav-bottom">
          <div className="social">
            <Link to="#"><BiLogoFacebook className='social-icn' /></Link>
            <Link to="#"><IoLogoInstagram className='social-icn' /></Link>
            <Link to="#"><FaXTwitter className='social-icn' /></Link>
            <Link to="#"><FaPinterestP className='social-icn' /></Link>
          </div>
          <div className="text-carusel">
            <Slider {...settings}>
              <div className="head-text">
                <p className='head-carusel-p'>WELCOME TO OUR STORE</p>
              </div>
              <div className="head-text">
                <p className='head-carusel-p'>FREE SHIPPING ON ORDERS OVER £75</p>
              </div>
            </Slider>
          </div>
        </div>
      </header>
      <Hamburgermenu isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Header;
