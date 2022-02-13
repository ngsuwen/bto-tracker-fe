import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import SwipeableViews from "react-swipeable-views";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Message() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{ maxHeight: 400, overflow: "auto", marginBottom: "8vh" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="2-room" />
        <Tab label="3-room" />
        <Tab label="4-room" />
        <Tab label="5-room" />
      </Tabs>

      {/* ---------------------------------------------------------------------------------- */}

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex} disabled>
        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            minWidth: 530,
            bgcolor: "background.paper",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <ListItem
              key={value}
              secondaryAction={
                <>
                  <IconButton>
                    <QuestionMarkIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                  <IconButton>
                    <CloseIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  <Box display="flex">
                    <Typography sx={{ marginBottom: "0.5rem" }}>
                      Flat Selection on 04 Oct 2021 for Queue Number 094
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

        {/* ---------------------------------------------------------------------------------- */}

        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            minWidth: 530,
            bgcolor: "background.paper",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <ListItem
              key={value}
              secondaryAction={
                <>
                  <IconButton>
                    <QuestionMarkIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                  <IconButton>
                    <CloseIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  <Box display="flex">
                    <Typography sx={{ marginBottom: "0.5rem" }}>
                      Flat Selection on 04 Oct 2021 for Queue Number 097
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

        {/* ---------------------------------------------------------------------------------- */}

        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            minWidth: 530,
            bgcolor: "background.paper",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <ListItem
              key={value}
              secondaryAction={
                <>
                  <IconButton>
                    <QuestionMarkIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                  <IconButton>
                    <CloseIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  <Box display="flex">
                    <Typography sx={{ marginBottom: "0.5rem" }}>
                      Flat Selection on 04 Oct 2021 for Queue Number 098
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

        {/* ---------------------------------------------------------------------------------- */}

        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            minWidth: 530,
            bgcolor: "background.paper",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <ListItem
              key={value}
              secondaryAction={
                <>
                  <IconButton>
                    <QuestionMarkIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                  <IconButton>
                    <CloseIcon sx={{ marginBottom: "0.7rem" }}/>
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={
                  <Box display="flex">
                    <Typography sx={{ marginBottom: "0.5rem" }}>
                      Flat Selection on 04 Oct 2021 for Queue Number 095
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
      </SwipeableViews>
    </Paper>
  );
}
