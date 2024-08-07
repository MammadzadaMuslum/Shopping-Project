import React from 'react';
import './cardtwo.scss';
import { Link } from 'react-router-dom';
import foto1 from "../../../../assets/Images/multirow-img-1.webp";
import foto2 from "../../../../assets/Images/multirow-img-2.webp";

function CardTwo() {
  return (
    <div className="card-two-container">
      <div className="card-two">
        <img src={foto1} alt="Sweats" className="card-two-image" />
        <div className="card-two-text">
          <h2 className='card-two-h2'>Discover Sweats</h2>
          <p className='card-two-p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus venenatis diam id porta. In aliquet tristique felis blandit vehicula. Ut laoreet ipsum in diam tempor lobortis.
          </p>
          <Link to="/sweats" className="card-two-button">SHOP NOW</Link>
        </div>
      </div>
      <div className="card-two reverse">
        <img src={foto2} alt="Denim" className="card-two-image" />
        <div className="card-two-text">
          <h2 className='card-two-h2'>Discover Denim</h2>
          <p className='card-two-p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus venenatis diam id porta. In aliquet tristique felis blandit vehicula. Ut laoreet ipsum in diam tempor lobortis.
          </p>
          <Link to="/denim" className="card-two-button">SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
