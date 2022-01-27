import * as React from "react";
import { Container, Typography } from "@mui/material";

export default function Faq() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Frequently Asked Questions
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "8vh" }}
      >
        <b>Who are you and why are you doing this?</b>
        <br />I wish to remain anonymous.
        <br />
        <br />
        <b>What is the Sign In button for?</b>
        <br />Only admins can sign in. To volunteer to be an admin, click here.
        <br />
        <br />
        <b>How can I contribute?</b>
        <br />
        If you have received your appointment date (be it officially via email,
        or you called HDB to ask) and wish to contribute, you may do so here.
        <br />
        <br />
        <b>How can I report an error?</b>
        <br />
        If you have spotted an error in the data presented and wish to report
        it, you may do so here.
      </Typography>
    </Container>
  );
}
