import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

// custom breakpoint
const nav = (theme) => ({
  [theme.breakpoints.down("md")]: { display: "block", py: "0.5rem" },
  [theme.breakpoints.up("md")]: { display: "none" },
});

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (open) => (event) => {
    setOpen(false)
    setState(open);
  };

  return (
    <div>
      <Box key="drawer" sx={{ bgcolor: "#333333" }}>
        <Button sx={nav} onClick={toggleDrawer(true)}>
          <MenuIcon style={{ fill: "white" }} />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
          >
            <List>
              {[
                ["Home", "/"],
                ["BTO Projects", "/projects"],
                ["Watchlist", "/tracker/projects"],
                ["Useful links", "/links"],
                ["FAQs", "/faq"],
                ["Disclaimer", "/disclaimer"],
              ].map((text, index) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={text[1]}
                  onClick={toggleDrawer(false)}
                >
                  <ListItem button key={text[0]}>
                    <ListItemText primary={text[0]} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem button key={"contribute"} onClick={handleClick} >
                <ListItemText primary={"+ Contribute"} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {[
                  ["Data Scrapper", "/form"],
                  ["Admin", "/admin-form"],
                  ["Appointment Date", "/appointment-form"],
                  ["Feedback", "/form"]
                ].map((text, index) => (
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={text[1]}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItem button key={text[0]} sx={{ pl: 4 }}>
                      <ListItemText primary={text[0]} />
                    </ListItem>
                  </Link>
                ))}
              </Collapse>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/"}
                onClick={toggleDrawer(false)}
              >
              <ListItem>
                <ListItemText primary={"Sign In"} />
              </ListItem>
              </Link>
            </List>
          </Box>
        </SwipeableDrawer>
      </Box>
    </div>
  );
}
