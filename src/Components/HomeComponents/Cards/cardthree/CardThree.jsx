import React from "react";
import "./cardthree.scss";

const newsData = [
  {
    imgSrc:
      "https://zenon3.myshopify.com/cdn/shop/articles/blog-6.png?v=1716368362&width=720",
    title: "THE BEST MEN’S LINEN SUIT FOR SUMMER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus venenatis diam id porta. In aliquet tristique felis blandit vehicula. Ut laoreet ipsum in diam tempor lobortis....",
  },
  {
    imgSrc:
      "https://zenon3.myshopify.com/cdn/shop/articles/blog-5.png?v=1716368333&width=720",
    title: "THE BEST BUDGET MEN’S CLOTHING BRANDS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus venenatis diam id porta. In aliquet tristique felis blandit vehicula. Ut laoreet ipsum in diam tempor lobortis....",
  },
  {
    imgSrc:
      "https://zenon3.myshopify.com/cdn/shop/articles/blog-4.png?v=1716368300&width=720",
    title: "23 THINGS NO MODERN MAN SHOULD OWN IN 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus venenatis diam id porta. In aliquet tristique felis blandit vehicula. Ut laoreet ipsum in diam tempor lobortis....",
  },
];

function CardThree() {
  return (
    <div className="card-three">
      <h2 className="card-three__title">Latest news</h2>
      <div className="card-three__container">
        {newsData.map((news, index) => (
          <div key={index} className="card-three__item">
            <div className="card-three-body">
              <img
                src={news.imgSrc}
                alt={news.title}
                className="card-three__image"
              />
            </div>
            <div className="card-three__texts">
              <h3 className="card-three__item-title">{news.title}</h3>
              <p className="card-three__description">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardThree;
