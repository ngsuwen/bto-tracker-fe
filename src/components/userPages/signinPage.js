import * as React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import createSessionApi from "../api/createSession";
import { DataContext } from "../../App";
import { Navigate } from "react-router-dom";

export default function SigninPage() {
  const { user, setUser } = React.useContext(DataContext)
  const [ error, setError ] = React.useState(false)
  const userRef = React.useRef()
  const passwordRef = React.useRef()

  const submitHandler=async()=>{
    const data = await createSessionApi(userRef.current.value, passwordRef.current.value)
    if (data.username){
      setError(false)
      setUser(data)
    } else {
      setError(true)
    }
  }

  return (
    <Container maxWidth="xs">
      {user && (
          <Navigate to="/dashboard" replace={true} />
        )}
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
        variant="body2"
        color="red"
        sx={{ textAlign: "justify" }}
      >
        {error?"Incorrect username or password.":""}
      </Typography>

      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        username
      </Typography>

      <TextField inputRef={userRef} size="small" fullWidth sx={{ marginBottom: "1vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        password
      </Typography>

      <TextField type="password" inputRef={passwordRef} size="small" fullWidth sx={{ marginBottom: "5vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "50%",
        }}
      >
        <Button onClick={submitHandler} fullWidth variant="outlined">
          Sign In
        </Button>
      </Box>
    </Container>
  );
}
