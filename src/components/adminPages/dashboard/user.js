import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import getUserListApi from "../../api/getUserList";
import deleteUserAdminApi from "../../api/deleteUserAdmin";

export default function User() {
  const [users,setUsers]=React.useState([])

  // delete request
  const deleteRequest = async (id) => {
    const result = await deleteUserAdminApi(id);
    if (result.message) {
      console.log("fail");
    } else {
      window.location.reload();
    }
  };
  
  React.useEffect(()=>{
    const fetchData=async()=>{
      const data = await getUserListApi()
      if (!data.message){
        setUsers(data)
      }
    }
    fetchData()
  },[])

  // user list function
  const userList =()=>{
    let userArr=[]
    users.sort()
    users.forEach((element,index)=>{
      if (element.username && element.role!=="superadmin"){
        userArr.push(
          <ListItem
          key={index}
          secondaryAction={
            <>
              <IconButton onClick={() => deleteRequest(element.id)}>
                <CloseIcon sx={{ marginBottom: "0.7rem" }} />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={
                <Typography sx={{ marginBottom: "0.5rem" }}>
                  {element.username}
                </Typography>
            }
          />
        </ListItem>
        )
      }
    })
    return userArr.sort()
  }

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "8vh" }}>
        User Overview{" "}
        <Link
          style={{
            fontSize: "1rem",
            color: "#555555",
          }}
          to="/admin/add/user"
        >
          (Add new user)
        </Link>
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        You can edit individual entries here.
      </Typography>

      {/* ---------------------------------------------------------------------------------- */}

      <Paper
        variant="outlined"
        elevation={0}
        sx={{ maxHeight: 400, overflow: "auto", marginBottom: "8vh" }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            bgcolor: "background.paper",
          }}
        >
          {userList()}
        </List>
      </Paper>
    </>
  );
}
