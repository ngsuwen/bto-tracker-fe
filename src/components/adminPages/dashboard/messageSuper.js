import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

// api
import editQueueAckApi from "../../api/editQueueAck";
import getUserListApi from "../../api/getUserList";

export default function MessageSuper() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getUserListApi();
      if (!data.message) {
        setUsers(data);
      }
    };
    fetchData();
  }, []);

  // acknowledge message
  const editQueue = async (launch, type, number, change) => {
    const result = await editQueueAckApi(launch, type, number, change);
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
                  <IconButton onClick={() => console.log("true")}>
                    <DoneIcon sx={{ marginBottom: "0.7rem" }} />
                  </IconButton>
                  <IconButton onClick={() => console.log("false")}>
                    <CloseIcon sx={{ marginBottom: "0.7rem" }} />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  <Box display="flex" sx={{ minWidth: 500 }}>
                    <Typography sx={{ marginBottom: "0.5rem" }}>
                      Application for {value.role==="admin"?"Admin":"Data Scraper"} role at {value.fk_launch[0].toUpperCase()+value.fk_launch.slice(1,3)+' '+value.fk_launch.slice(3,7)+' '+value.fk_launch[7].toUpperCase()+value.fk_launch.slice(8)}.
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
        {users.length === 0 ? (
          <Typography display={"flex"} justifyContent={"center"}>
            No new messages
          </Typography>
        ) : (
          ""
        )}
      </List>
    </Paper>
  );
}
