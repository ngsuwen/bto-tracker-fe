import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  TextField
} from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

// api
import getUserListApi from "../../api/getUserList";
import deleteUserAdminApi from "../../api/deleteUserAdmin";
import editUserAdminApi from "../../api/editUserAdmin";

export default function MessageSuper() {
  const [users, setUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [userIdToCreate, setUserIdToCreate] = React.useState()

  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const handleClickOpen = (id) => {
    setUserIdToCreate(id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // create user 
  const handleCloseSubmit = async() => {
    const result = await editUserAdminApi(userIdToCreate, usernameRef.current.value, passwordRef.current.value)
    console.log(result)
    if (!result.message){
      window.location.reload()
    }
    setOpen(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getUserListApi();
      if (!data.message) {
        setUsers(data);
      }
    };
    fetchData();
  }, []);

  // delete request
  const deleteRequest = async (id) => {
    const result = await deleteUserAdminApi(id);
    if (result.message) {
      console.log("fail");
    } else {
      window.location.reload();
    }
  };

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{ maxHeight: 300, overflow: "auto" }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          minWidth: 530,
          bgcolor: "background.paper",
        }}
      >
        {users.map((value, index) => {
          if (!value.username){
            return(
            <ListItem
              key={index}
              secondaryAction={
                <>
                  <IconButton onClick={()=> handleClickOpen(value.id)}>
                    <DoneIcon sx={{ marginBottom: "0.7rem" }} />
                  </IconButton>
                  <IconButton onClick={() => deleteRequest(value.id)}>
                    <CloseIcon sx={{ marginBottom: "0.7rem" }} />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  <Box display="flex" sx={{ minWidth: 500 }}>
                    <Typography sx={{ marginBottom: "0.5rem" }}>
                      Application for {value.role==="admin"?"Admin":"Data Scraper"} role at {value.fk_launch[0].toUpperCase()+value.fk_launch.slice(1,3)+' '+value.fk_launch.slice(3,7)+' '+value.fk_launch[7].toUpperCase()+value.fk_launch.slice(8)}
                    </Typography>
                    <ImageSearchIcon
                      fontSize="small"
                      color="action"
                      sx={{ marginLeft: "0.5rem" }}
                    />
                  </Box>
                }
              />
            </ListItem>)
          } else if (value.username==="deleted"){
            return(
              <ListItem
                key={index}
                secondaryAction={
                  <>
                    <IconButton onClick={() => deleteRequest(value.id)}>
                      <CloseIcon sx={{ marginBottom: "0.7rem" }} />
                    </IconButton>
                  </>
                }
              >
                <ListItemText
                  primary={
                    <Box display="flex" sx={{ minWidth: 500 }}>
                      <Typography sx={{ marginBottom: "0.5rem" }}>
                        Request to delete {value.role==="admin"?"Admin":"Data Scraper"} role at {value.fk_launch[0].toUpperCase()+value.fk_launch.slice(1,3)+' '+value.fk_launch.slice(3,7)+' '+value.fk_launch[7].toUpperCase()+value.fk_launch.slice(8)}
                      </Typography>
                      <ImageSearchIcon
                        fontSize="small"
                        color="action"
                        sx={{ marginLeft: "0.5rem" }}
                      />
                    </Box>
                  }
                />
              </ListItem>)
          }
        })}
        {users.findIndex((element)=>element.username===null)===-1 && users.findIndex((element)=>element.username==="deleted" )===-1?
        <Typography display={'flex'} justifyContent={'center'}>
        No new messages
      </Typography>:""}
      </List>

      {/* ----------------------------------------------------------------------------------- */}
      
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            inputRef={usernameRef}
            autoFocus
            margin="dense"
            id="name"
            label="username"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={passwordRef}
            margin="dense"
            id="name"
            label="password"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
