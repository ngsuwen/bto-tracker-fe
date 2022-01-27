// add emojis? ❗
// https://emojidictionary.emojifoundation.com/index.php

import * as React from "react";
import { Container, Typography } from "@mui/material";

export default function Disclaimer() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Disclaimers
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "8vh", textAlign:"justify"}}
      >
        1. As information here is crowdsourced, I am unfortunately unable to guarantee or verify its accuracy. Please use this channel as a guide at most. To facilitate this, I will also use discretion to indicate dates provided by anonymous/unconfirmed/questionable sources with an asterisk (*).
        <br />
        <br />
        2. HDB has no obligation to assign appointment dates based on past patterns, so please interpret the data with discretion.
      </Typography>
    </Container>
  );
}
