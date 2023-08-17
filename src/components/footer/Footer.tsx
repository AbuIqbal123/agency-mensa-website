import React from "react";
import "./footer.css";
import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Agency Mensa</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#philosophy" className="footer__link">
              Philosophy
            </a>
          </li>
          <li>
            <a href="#offer" className="footer__link">
              Offer
            </a>
          </li>
          <li>
            <a href="#faq" className="footer__link">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <IconButton
            edge="start"
            color="inherit"
            className="iconButton"
            href="https://www.facebook.com/profile.php?id=100091911396129"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton
              edge="start"
              color="inherit"
              className="iconButton"
              href="https://www.instagram.com/agencymensa"
              target="_blank"
            >
              <Instagram />
            </IconButton>{" "}
            <IconButton
              edge="start"
              color="inherit"
              className="iconButton"
              href="https://api.whatsapp.com/send?phone=+447903435375&text=Hello!%20I%20just%20had%20a%20look%20through%20your%20website."
              target="_blank"
            >
              <WhatsApp />
            </IconButton>
        </div>

        <span className="footer__copy">
          {/* &#169;  */}
          Agency Mensa | All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
