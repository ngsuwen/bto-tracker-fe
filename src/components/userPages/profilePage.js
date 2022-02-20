import * as React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { DataContext } from "../../App";
import editUserApi from "../api/editUser";

export default function ProfilePage() {
  const oldPasswordRef = React.useRef();
  const newPasswordRef = React.useRef();
  const retypePasswordRef = React.useRef();
  const [settings, setSettings] = React.useState();
  const { user } = React.useContext(DataContext)

  React.useEffect(() => {
    setSettings(null);
  }, []);

  const submitHandler = async () => {
    if (newPasswordRef.current.value === oldPasswordRef.current.value) {
      setSettings("new error");
    } else if (
      newPasswordRef.current.value !== retypePasswordRef.current.value
    ) {
      setSettings("retype error");
    } else {
      const result = await editUserApi(user.id, oldPasswordRef.current.value, newPasswordRef.current.value)
      if (result.message==="Wrong password"){
        setSettings("old error");
      } else {
        setSettings("success")
        oldPasswordRef.current.value=""
        retypePasswordRef.current.value=""
        newPasswordRef.current.value=""
      }
    }
  };

  const deleteHandler = async () => {
    setSettings("old error");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "50%" }}>
        {user?user.username:""}
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "5vh", textAlign: "justify" }}
      >
        This is {user?user.role==="admin"?"an Admin":"a Data Scraper":""} account, and will remain valid till the completion of
        flat selection, unless otherwise requested.
      </Typography>

      {settings === "success" ? (
        <Typography
          variant="body2"
          color="error"
          sx={{
            marginBottom: "1vh",
            textAlign: "justify",
          }}
        >
          Update successful!
        </Typography>
      ) : (
        ""
      )}

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        old password
      </Typography>

      <TextField
        type="password"
        inputRef={oldPasswordRef}
        size="small"
        fullWidth
        sx={{ marginBottom: "1vh" }}
      />

      {settings === "old error" ? (
        <Typography
          variant="body2"
          color="error"
          sx={{
            marginBottom: "1vh",
            textAlign: "justify",
          }}
        >
          Incorrect password
        </Typography>
      ) : (
        ""
      )}

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        new password
      </Typography>

      <TextField
        type="password"
        inputRef={newPasswordRef}
        size="small"
        fullWidth
        sx={{ marginBottom: "1vh" }}
      />

      {settings === "new error" ? (
        <Typography
          variant="body2"
          color="error"
          sx={{
            marginBottom: "1vh",
            textAlign: "justify",
          }}
        >
          Please choose a different password
        </Typography>
      ) : (
        ""
      )}

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        retype password
      </Typography>

      <TextField
        type="password"
        inputRef={retypePasswordRef}
        size="small"
        fullWidth
        sx={{ marginBottom: "1vh" }}
      />

      {settings === "retype error" ? (
        <Typography
          variant="body2"
          color="error"
          sx={{
            marginBottom: "1vh",
            textAlign: "justify",
          }}
        >
          Passwords do not match
        </Typography>
      ) : (
        ""
      )}

      {/* ---------------------------------------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "5vh",
          marginBottom: "1vh",
        }}
      >
        <Button onClick={submitHandler} fullWidth variant="outlined">
          Change password
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "50%",
        }}
      >
        <Button
          onClick={deleteHandler}
          fullWidth
          variant="outlined"
          color="error"
        >
          Delete account
        </Button>
      </Box>
    </Container>
  );
}
