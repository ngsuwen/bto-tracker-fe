import * as React from "react";
import { List, ListItem, ListItemText, IconButton, Typography, Box, Paper, Tabs, Tab } from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function Message() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper variant="outlined" elevation={0} sx={{height: 400, overflow: 'auto', marginBottom: "8vh"}}>
    <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
      </Tabs>
      <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <ListItem
          key={value}
          secondaryAction={
            <IconButton>
              <DoneIcon />
              <CloseIcon sx={{ marginLeft: "0.5rem" }} />
            </IconButton>
          }
        >
          <ListItemText
            primary={
              <Box display="flex">
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
