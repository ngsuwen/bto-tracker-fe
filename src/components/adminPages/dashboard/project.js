import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { DataContext } from "../../../App";

export default function Project() {
  const { projList } = React.useContext(DataContext);
  
  // project list function
  const projectList =()=>{
    let projectArr=[]
    projList.sort()
    projList.forEach((element,index)=>{
      projectArr.push(
      <ListItem
        key={element}
        secondaryAction={
          <>
            <Link to={`/admin/add/units/${element}`}>
              <IconButton>
                <AddIcon sx={{ marginBottom: "0.7rem" }} />
              </IconButton>
            </Link>
            <IconButton>
              <CloseIcon sx={{ marginBottom: "0.7rem" }} />
            </IconButton>
          </>
        }
      >
        <ListItemText
          primary={
            <Link to={`/admin/edit/${element}`}>
              <Typography sx={{ marginBottom: "0.5rem" }}>
                {element[0].toUpperCase()+element.slice(1,3)+' '+element.slice(3,7)+' '+element[7].toUpperCase()+element.slice(8)}
              </Typography>
            </Link>
          }
        />
      </ListItem>
      )
    })
    return projectArr.sort()
  }

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "8vh" }}>
        Project Overview{" "}
        <Link
          style={{
            fontSize: "1rem",
            color: "#555555",
          }}
          to="/admin/add"
        >
          (Add new project)
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
          {projectList()}
          {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <ListItem
              key={value}
              secondaryAction={
                <>
                  <Link to="/admin/add/units">
                    <IconButton>
                      <AddIcon sx={{ marginBottom: "0.7rem" }} />
                    </IconButton>
                  </Link>
                  <IconButton>
                    <CloseIcon sx={{ marginBottom: "0.7rem" }} />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  <Link to="/admin/edit/nov2021hougang-Olive">
                    <Typography sx={{ marginBottom: "0.5rem" }}>
                      Nov 2021 Hougang Olive
                    </Typography>
                  </Link>
                }
              />
            </ListItem>
          ))} */}
        </List>
      </Paper>
    </>
  );
}
