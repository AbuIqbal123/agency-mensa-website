import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import "./header.css";

const Header: React.FC = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`root ${isHeaderSticky ? "sticky" : ""}`}>
      <AppBar className="header">
        <Toolbar>
          <div className="social-icons">
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
          <div className="nav-links">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#philosophy" className="nav-link">
              Philosophy
            </a>
            <a href="#offer" className="nav-link">
              Offer
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <Typography variant="h6" component="div" className="title">
            Agency Mensa
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
