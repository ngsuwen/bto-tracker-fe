import * as React from "react";
import { List, ListItem, ListItemText, IconButton, Typography, Box, Paper } from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function Message() {
  return (
    <Paper variant="outlined" elevation={0} sx={{maxHeight: 300, overflow: 'auto'}}>
    <List sx={{ width: "100%", maxWidth: "100%", minWidth:530, bgcolor: "background.paper" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <ListItem
          key={value}
          secondaryAction={
            <IconButton>
              <DoneIcon sx={{ marginBottom: "0.7rem" }}/>
              <CloseIcon sx={{ marginLeft: "0.5rem", marginBottom: "0.7rem" }} />
            </IconButton>
          }
        >
          <ListItemText
            primary={
              <Box display="flex" sx={{minWidth:500}}>
                <Typography sx={{ marginBottom: "0.5rem" }}>
                    Flat Selection on 04 Oct 2021 for Queue Number 094
                </Typography>
                <ImageSearchIcon fontSize="small" color="action" sx={{ marginLeft: "0.5rem" }}/>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
    </Paper>
  );
}
