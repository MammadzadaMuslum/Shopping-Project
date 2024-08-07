import React, { useState, useEffect } from "react";
import ShowModal from "../../Components/Modal/ShowModal";
import "./home.scss";
import BannerCrusel from "../../Components/HomeComponents/BannerCrusel/BannerCrusel";
import CardOne from "../../Components/HomeComponents/Cards/cardone/cardone";
import CardTwo from "../../Components/HomeComponents/Cards/cardtwo/CardTwo";
import CardThree from "../../Components/HomeComponents/Cards/cardthree/CardThree";
import CardFour from "../../Components/HomeComponents/Cards/cardfour/CardFour";
import Scissors from "../../Components/HomeComponents/Scirrors/Scirrors";
import CardFive from "../../Components/HomeComponents/Cards/cardfive/CardFive";
import MarqueeSale from "../../Components/marquee2/MarqueeSale";

function Home() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <main>
      <section>
        <BannerCrusel />
        <div className="container">
          <div className="home-text">
            <h4>"CELEBREYTE" AN ERA OF EXCLUSIVE LUXURY</h4>
            <p>
              Discover a world of uniqueness with our collection of limited
              clothing, where each piece is a unique expression of style and
              individuality, you won't find anywhere else.
            </p>
          </div>
        </div>
        <div className="home-text2">
          <p>
            Share information about your brand with your customers. Describe a
            product, make announcements, or welcome customers to your store.
          </p>
        </div>
        <CardOne/>
        <MarqueeSale/>
        <CardTwo/>
        <CardThree/>
        <CardFour/>
        <Scissors/>
        <CardFive/>
      </section>
      <ShowModal showModal={showModal} closeModal={closeModal} />
    </main>
  );
}

export default Home;
