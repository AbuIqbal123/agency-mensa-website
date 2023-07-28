import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import MessageIcon from "@mui/icons-material/Message";
import "./contact.css";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="contact" ref={contactRef}>
      <div className="contact__header">
        <Typography
          className="contact__header"
          variant="h3"
          align="center"
          gutterBottom
        >
          Get in Touch
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="card-container">
            <Card className="card">
              <CardHeader
                className="card__header"
                title="Email"
                avatar={<EmailIcon />}
              />
              <CardContent className="card-content">
                <Typography variant="body2" color="textSecondary">
                  sales@agencymensa.com
                </Typography>
                <Link href="mailto:ahmil2010@gmail.com" target="_blank">
                  Email us
                </Link>
              </CardContent>
            </Card>
            <Card className="card">
              <CardHeader
                className="card__header"
                title="Instagram"
                avatar={<InstagramIcon />}
              />
              <CardContent className="card-content">
                <Typography variant="body2" color="textSecondary">
                  @agencymensa
                </Typography>
                <Link
                  href="https://www.instagram.com/agencymensa"
                  target="_blank"
                >
                  Shoot us a DM
                </Link>
              </CardContent>
            </Card>
            <Card className="card">
              <CardHeader
                className="card__header"
                title="Messenger"
                avatar={<MessageIcon />}
              />
              <CardContent className="card-content">
                <Typography variant="body2" color="textSecondary">
                  m.me
                </Typography>
                <Link href="#">Text us</Link>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="contact__form">
            <ContactForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
