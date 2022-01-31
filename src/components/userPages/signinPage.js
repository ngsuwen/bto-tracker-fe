import * as React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function SigninPage() {

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "50%" }}>
        Welcome
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "5vh", textAlign: "justify" }}
      >
        Don't have an account? Please apply to be either an <a href="#/admin-form">admin</a> or <a href="#/scraper-form">data
        scraper</a>.
      </Typography>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        username
      </Typography>

      <TextField size="small" fullWidth sx={{ marginBottom: "1vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        password
      </Typography>

      <TextField size="small" fullWidth sx={{ marginBottom: "5vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "50%",
        }}
      >
        <Button fullWidth variant="outlined">
          Sign In
        </Button>
      </Box>
    </Container>
  );
}
