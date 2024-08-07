import React from "react";
import "../Contact/contact.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-banner">
        <div className="contact-texts">
          <h2>CONTACT US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur donec sodales sed nibh id
            vehicula.
          </p>
        </div>
      </div>
      <div className="contact-benefit">
        <div className="contact-box">
          <FaLocationDot className="contact-icn" />
          <h3>MAIN OFFICE</h3>
          <p>Workiva, 2900 University Blvd, Ames, IA 50010, United States</p>
        </div>
        <div className="contact-box">
          <FaMobileAlt className="contact-icn" />
          <h3>CALL US TODAY!</h3>
          <p>+91 123-456-7890</p>
        </div>
        <div className="contact-box">
          <GiLetterBomb className="contact-icn" />
          <h3>EMAIL</h3>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-top">
          <h1>We'd love to hear from you!</h1>
          <p>
            Have any questions or comments? Feel free to contact us! Please
            allow us 1-2 business days to get back to you :) In the meantime,
            check our
          </p>
        </div>
        <form className="contact-form-fields">
          <div className="form-top">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder=" "
              required
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="form-group">
            <textarea
              id="comment"
              name="comment"
              rows="4"
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
