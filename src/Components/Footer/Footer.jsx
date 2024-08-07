import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo-1.avif";
import "./footer.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import {
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <Link>
            <img src={logo} alt="Logo" />
          </Link>
          <p>SIGN UP FOR 15% OFF</p>

          <div className="email-input-wrapper">
            <Input
              placeholder="Email"
              border="1px solid black"
              borderRadius="none"
              w="358px"
            />
          </div>
          <div className="social">
            <Link>
              <BiLogoFacebook className="social-icn" />
            </Link>
            <Link>
              <IoLogoInstagram className="social-icn" />
            </Link>
            <Link>
              <FaXTwitter className="social-icn" />
            </Link>
            <Link>
              <FaPinterestP className="social-icn" />
            </Link>
          </div>
        </div>
        <div className="footer-right desktop-view">
          <ul>
            <h3>QUICK LINKS</h3>
            <li>
              <Link to="/shop">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Contact Us</Link>
            </li>
            <li>
              <Link to="/contact">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          <ul>
            <h3>SHOP</h3>
            <li>
              <Link to="/privacy">Tops</Link>
            </li>
            <li>
              <Link to="/terms">Bottoms</Link>
            </li>
            <li>
              <Link to="/returns">Accessories</Link>
            </li>
            <li>
              <Link to="/shipping">Sweats</Link>
            </li>
            <li>
              <Link to="/size-guide">Denim</Link>
            </li>
          </ul>
          <ul>
            <h3>INFORMATION</h3>
            <li>
              <Link to="/careers">Terms of Service</Link>
            </li>
            <li>
              <Link to="/press">Return Policy</Link>
            </li>
            <li>
              <Link to="/affiliates">Shipping</Link>
            </li>
            <li>
              <Link to="/sustainability">Privacy</Link>
            </li>
            <li>
              <Link to="/store-locator">Compare</Link>
            </li>
          </ul>
          <ul>
            <h3>SUPPORT</h3>
            <li className="sup-text">
              <MdOutlineQuestionMark /> Help Center
            </li>
            <li className="sup-text ">
              <BsFillTelephoneFill /> 0123 456 789
            </li>
            <li className="sup-text">
              <SlEnvolopeLetter /> info@champions.com
            </li>
          </ul>
        </div>

        <div className="footer-right mobile-view">
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  QUICK LINKS
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <li>
                  <Link to="/shop">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/blog">Contact Us</Link>
                </li>
                <li>
                  <Link to="/contact">Blog</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  SHOP
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <li>
                  <Link to="/privacy">Tops</Link>
                </li>
                <li>
                  <Link to="/terms">Bottoms</Link>
                </li>
                <li>
                  <Link to="/returns">Accessories</Link>
                </li>
                <li>
                  <Link to="/shipping">Sweats</Link>
                </li>
                <li>
                  <Link to="/size-guide">Denim</Link>
                </li>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  INFORMATION
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <li>
                  <Link to="/careers">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/press">Return Policy</Link>
                </li>
                <li>
                  <Link to="/affiliates">Shipping</Link>
                </li>
                <li>
                  <Link to="/sustainability">Privacy</Link>
                </li>
                <li>
                  <Link to="/store-locator">Compare</Link>
                </li>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  SUPPORT
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <li className="sup-text">
                  <MdOutlineQuestionMark /> Help Center
                </li>
                <li className="sup-text ">
                  <BsFillTelephoneFill /> 0123 456 789
                </li>
                <li className="sup-text">
                  <SlEnvolopeLetter /> info@champions.com
                </li>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="bottom-lisens">© 2023, Champions Powered By Shopify</p>
        <div className="payment-foto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt="Visa"
            width="42px"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
            alt="MasterCard"
            width="42px"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            width="42px"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
