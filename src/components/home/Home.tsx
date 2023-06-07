import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__title">
          <h1>Marketing that gets results</h1>
        </div>
        <div className="home__text">
          <p>Supercharge your business growth with TikTok Ads!</p>
          <p>Say goodbye to wasted time and ineffective ad campaigns</p>
          <p>
            Breakthrough the noise, skyrocket your sales, and unlock the full
            potential of TikTok
          </p>
        </div>
        <div className="home__button">
          <button>
            <span>Contact us now and prepare for remarkable results</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;