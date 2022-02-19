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

export default function Message({ data }) {

  const messageStr=(date, number)=>{
    const dateStr = new Date(date).toString()
    let queueNum = ''
    if (number<10){
      queueNum='00'+number
    } else if (number<100){
      queueNum='0'+number
    } else {
      queueNum = number
    }
    return `Flat Selection on ${dateStr.substr(4,11)} for Queue Number ${queueNum}`
  }

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
        {data.map((value) => (
          <ListItem
            key={value.fk_launch}
            secondaryAction={
              <>
                <IconButton>
                  <DoneIcon sx={{ marginBottom: "0.7rem" }} />
                </IconButton>
                <IconButton>
                  <CloseIcon
                    sx={{ marginBottom: "0.7rem" }}
                  />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={
                <Box display="flex" sx={{ minWidth: 500 }}>
                  <Typography sx={{ marginBottom: "0.5rem" }}>
                    {messageStr(value.date, value.number)}
                  </Typography>
                  <ImageSearchIcon
                    fontSize="small"
                    color="action"
                    sx={{ marginLeft: "0.5rem" }}
                  />
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
