import React from "react";
import "./offer.css";
import tiktokOffer from "../../assets/images/tiktok-offer-img.webp";

const Offer: React.FC = () => {
  return (
    <section id="offer">
    <div className="offer">
      <div className="offer__content">
        <div className="offer__title">
          <h1>What we offer</h1>
        </div>
        <div className="offer__intro">
          <p>TikTok Ads. Focused on Impact.</p>
        </div>
        <div className="offer__paragraph">
          <p>
            We're all about TikTok advertising, and it shows. No fluff, no
            distractions - just results. If you're tired of agencies that offer
            a laundry list of services without delivering real outcomes, we're
            here to change the game.
          </p>{" "}
          <p>
            With us, you'll get a clear breakdown of your ad spend, revenue, and
            net profit in just a few clicks. We specialize in TikTok, ensuring
            your brand thrives on this dynamic platform. Say goodbye to the
            noise and hello to impactful TikTok ads.
          </p>
        </div>
        <div className="contact__button">
          <a href="#contact">
          <button>
            <span>Speak to our team today</span>
          </button>
          </a>
        </div>
      </div>
      <div className="image-wrapper-offer">
        <img src={tiktokOffer} alt="TikTok Ads" />
      </div>
    </div>
    </section>
  );
};

export default Offer;
