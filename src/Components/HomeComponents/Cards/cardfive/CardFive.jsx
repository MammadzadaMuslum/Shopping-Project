import React from "react";
import Marquee from "../../../Marquee/Marquee";
import "../cardfive/cardfive.scss";

function CardFive() {
  const fotoarr = [
    {
      id: 1,
      image:
        "https://zenon3.myshopify.com/cdn/shop/files/Instagram-1.png?v=1720697320&width=550",
    },
    {
      id: 2,
      video: "https://cdn.shopify.com/videos/c/o/v/e3a6bf848cd940ef8a9890d5c6c87651.mp4",
    },
    {
      id: 3,
      image:
        "https://zenon3.myshopify.com/cdn/shop/files/Instagram-2.png?v=1720697319&width=550",
    },
    {
      id: 4,
      video: "https://cdn.shopify.com/videos/c/o/v/cd96567846044960af64e0799d5a3da4.mp4",
    },
    {
      id: 5,
      image: "https://zenon3.myshopify.com/cdn/shop/files/Instagram-5.png?v=1720697320&width=550",
    },
  ];

  return (
    <>
      <div className="cardfive">
        <div className="cardfive-top-text">
          <h1>Follow us Instagram@champions</h1>
          <p>#follow on social media</p>
        </div>
        <div className="cardfive-bottom">
          {fotoarr.map((item) => (
            <div key={item.id} className="cardfive-item">
              {item.image ? (
                <img src={item.image} alt={`Instagram ${item.id}`} />
              ) : (
                <video src={item.video} autoPlay loop muted />
              )}
            </div>
          ))}
        </div>
      </div>
      <Marquee />
    </>
  );
}

export default CardFive;
