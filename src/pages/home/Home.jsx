import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";

import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} slidesToScroll={3}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
