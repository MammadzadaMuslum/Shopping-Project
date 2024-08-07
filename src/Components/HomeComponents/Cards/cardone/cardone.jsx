import React from "react";
import "./cardone.scss";
import foto1 from "../../../../assets/Images/category-1.webp";
import foto2 from "../../../../assets/Images/category-2.webp";
import foto3 from "../../../../assets/Images/category-3.webp";

function CardOne() {
  return (
    <>
      <div className="cardone-text">
        <h2>You may love our "COLLECTIONS"</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <img src={foto1} alt="Best Seller" />
          </div>
          <div className="card-info">
            <p>BEST SELLER</p>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={foto2} alt="New Arrival" />
          </div>
          <div className="card-info">
            <p>NEW ARRIVAL</p>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={foto3} alt="Accessories" />
          </div>
          <div className="card-info">
            <p>ACCESSORIES</p>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOne;
