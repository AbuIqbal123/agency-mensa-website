import React from "react";
import "./philosophy.css";
import statistics from "../../assets/images/statistics-philosophy.png";

const Philosophy: React.FC = () => {
  return (
    <div className="philosophy">
      <div className="stats-text">
        <h1>Don't just take our word for it</h1>
      </div>
      <div className="stats__img">
        <img src={statistics} alt="TikTok Statistics" className="stats-image" />
      </div>
      <div className="philosophy__text--header">
        <h1>Our Philosophy</h1>
      </div>
      <div className="philosophy__text">
        <p>Unlock Unparalleled Results with Agency Mensa</p>
        <p>
          Millions of dollars in return on ad spend. No inefficiencies or
          formalities{" "}
        </p>
        <p>
          Our client case studies are legendary. Our waiting list speaks
          volumes. We seek ambitious clients ready for extraordinary growth
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
