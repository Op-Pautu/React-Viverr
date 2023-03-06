import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
    </div>
  );
}

export default Home;
