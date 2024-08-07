import React from "react";
import "./scissors.scss";
import video from "../../../assets/Videos/Recording 2024-08-06 161548.mp4";

function Scissors() {
  return (
    <div className="scissors">
      <div className="content-flex">
        <h1>Flash Sale!</h1>
        <p>
          Customers love our products and we always strive to please them all
          with our coupon.
        </p>
      </div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content ">
        <div className="content-top">
          <div className="coupon-text">
            <h2>BUY ONE GET ONE FREE</h2>
            <p>(in stores only)</p>
          </div>
          <div className="content-image">
            <img src="https://zenon3.myshopify.com/cdn/shop/files/Frame_1125388.png?v=1721899546" />
          </div>
        </div>

        <div className="clip-coupon">
          <button>CLIP COUPON</button>
        </div>
      </div>

      <div className="video-container reverse">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Scissors;
