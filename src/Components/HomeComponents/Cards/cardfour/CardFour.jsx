import React from "react";
import "./cardfour.scss";
import { FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";
import video from "../../../../assets/Videos/a91051ab6c3645349b800b9d3d9d5dfe.mp4";

const customerReviews = [
  {
    imgSrc: "https://zenon3.myshopify.com/cdn/shop/files/testimonial-img-1.png?v=1721643314",
    name: "Brayton",
    verified: true,
    review: "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend!",
    productImg: "https://zenon3.myshopify.com/cdn/shop/products/product-1.png?v=1705406410",
    productHoverImg: "https://zenon3.myshopify.com/cdn/shop/products/product-1-1.png?v=1705406410", 
    productName: "OVERSIZED TEE - BLACK",
    productPrice: "$50.00",
  },
  {
    name: "Aleena",
    verified: true,
    review: "These are so pretty and very comfy. Perfect color as well. I love wearing these with a neutral top. Wicked cute...",
    productImg: "https://zenon3.myshopify.com/cdn/shop/files/product-18.png?v=1716293259",
    productHoverImg: "https://zenon3.myshopify.com/cdn/shop/files/product-18-1.png?v=1716293259", 
    productName: "GIRLS SOLID ROUND NECK YELLOW SWEATER",
    productPrice: "$37.29",
    isVideo: true,
    videoSrc: video,
  },
  {
    imgSrc: "https://zenon3.myshopify.com/cdn/shop/files/testimonial-img-2.png?v=1721643314",
    name: "Amina",
    verified: true,
    review: "A perfect product, it keeps you very warm without overheating. True to size, I couldn't be happier with the purchase...",
    productImg: "https://zenon3.myshopify.com/cdn/shop/files/product-20.png?v=1716294586",
    productHoverImg: "https://zenon3.myshopify.com/cdn/shop/files/product-20-1.png?v=1716294586", 
    productName: "DENIM OUTFIT BLUE JACKET",
    productPrice: "$50.85",
  },
];

const benefits = [
  {
    icon: <FaShippingFast size={30} />,
    title: "FREE SHIPPING",
    description: "Sed mattis sagittis placerat cras. consectetur adipiscing elit. Vestibulum non aliquam ex."
  },
  {
    icon: <FaHeadset size={30} />,
    title: "TOP NOTCH SUPPORT",
    description: "Sed mattis sagittis placerat cras. consectetur adipiscing elit. Vestibulum non aliquam ex."
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "SECURE PAYMENTS",
    description: "Sed mattis sagittis placerat cras. consectetur adipiscing elit. Vestibulum non aliquam ex."
  },
];

function CardFour() {
  const handleMouseOver = (e, hoverImg) => {
    e.target.src = hoverImg;
  };

  const handleMouseOut = (e, originalImg) => {
    e.target.src = originalImg;
  };

  return (
    <div className="card-four">
      <h2 className="card-four__title">Customer Say!</h2>
      <div className="card-four__container">
        {customerReviews.map((review, index) => (
          <div key={index} className="card-four__item">
            <div className="card-four__media">
              {!review.isVideo ? (
                <img src={review.imgSrc} alt={review.name} className="card-four__image" />
              ) : (
                <video className="card-four__video" autoPlay loop muted>
                  <source src={review.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="card-four__content">
              <div className="card-four__header">
                <div className="card-four__rating">
                  {Array(5).fill('⭐')}
                </div>
                <div className="card-four__name">
                  {review.name} {review.verified && <span className="verified">✔ Verified Buyer</span>}
                </div>
              </div>
              <p className="card-four__review">{review.review}</p>
              <div className="card-four__product">
                <img 
                  src={review.productImg} 
                  alt={review.productName} 
                  className="card-four__product-image" 
                  onMouseOver={(e) => handleMouseOver(e, review.productHoverImg)} 
                  onMouseOut={(e) => handleMouseOut(e, review.productImg)}
                />
                <div className="card-four__product-info">
                  <div className="card-four__product-name">{review.productName}</div>
                  <div className="card-four__product-price">{review.productPrice}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <div className="benefit__icon">{benefit.icon}</div>
            <div className="benefit__title">{benefit.title}</div>
            <div className="benefit__description">{benefit.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardFour;
