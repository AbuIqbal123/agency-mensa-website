import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
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
            <IconButton edge="start" color="inherit" className="iconButton">
              <FacebookIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" className="iconButton">
              <TwitterIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" className="iconButton">
              <InstagramIcon />
            </IconButton>
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
