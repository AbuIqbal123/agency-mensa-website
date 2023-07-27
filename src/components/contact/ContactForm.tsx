import React, { FormEvent, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const SERVICE_ID = "service_38bn3ab";
const TEMPLATE_ID = "template_7jubvgi";
const PUBLIC_KEY = "n1sNFDqZhrUh-5Scx";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((response: EmailJSResponseStatus) => {
          console.log("Email sent successfully!", response);
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
        });
    }

    e.currentTarget.reset();
  };

  return (
    <Card>
      <CardHeader title="Write us your project" />
      <CardContent>
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                variant="outlined"
                placeholder="Insert your name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                type="email"
                label="Mail"
                variant="outlined"
                placeholder="Insert your email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                name="project"
                rows={6}
                label="Project"
                variant="outlined"
                placeholder="Write your project"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Send Message
                <MessageIcon sx={{ marginLeft: 1 }} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;