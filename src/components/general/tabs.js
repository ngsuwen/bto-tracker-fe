// PASS USER LOGIN STATE (affects sign in and user nav)

import * as React from "react";
import {
  Container,
  Box,
  Tab,
  Tabs,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

// custom breakpoint
const nav = (theme) => ({
  [theme.breakpoints.down("md")]: { display: "none" },
  [theme.breakpoints.up("md")]: { bgcolor: "#333333", display: "block" },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 0,
  },
});

const StyledTab = styled((props) => (
  <a id="tab-nav" href={`#${props.link}`}>
    <Tab disableRipple {...props} />
  </a>
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(14),
  marginRight: theme.spacing(1),
  color: "inherit",
  "&.Mui-selected": {
    color: "inherit",
  },
}));

const StyledTab2 = styled((props) => (
  <div id={props.specialId}>
    <Tab disableRipple {...props} />
  </div>
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(14),
  marginRight: theme.spacing(1),
  color: "inherit",
  "&.Mui-selected": {
    color: "inherit",
  },
}));

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box sx={nav}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
            >
              <StyledTab label="Home" link="/" />
              <StyledTab label="BTO Projects" link="/projects" />
              <StyledTab label="Watchlist" link="/tracker/projects" />
              <StyledTab label="Useful links" link="/links" />
              <StyledTab label="FAQs" link="/faq" />
              <StyledTab label="Disclaimer" link="/disclaimer" />
            </StyledTabs>
          </Box>
          <Box>
            <StyledTabs value={1} aria-label="styled tabs example">
              <StyledTab2
                onClick={handleClick}
                label="+ Contribute"
                specialId="contribute-tab"
              />
              {/* <StyledTab label="Sign In" link="/signin" /> */}
              <StyledTab2
                onClick={handleClick2}
                label="Username"
                specialId="tab-nav"
              />
            </StyledTabs>
          </Box>
          <Menu
            id="contribute-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="/scraper-form"><MenuItem onClick={handleClose}>Data Scraper</MenuItem></Link>
            <Link to="/admin-form"><MenuItem onClick={handleClose}>Admin</MenuItem></Link>
            <Link to="/appointment-form"><MenuItem onClick={handleClose}>Appointment Date</MenuItem></Link>
            <Link to="/feedback-form"><MenuItem onClick={handleClose}>Feedback</MenuItem></Link>
          </Menu>
          <Menu
            id="contribute-menu"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="/"><MenuItem onClick={handleClose2}>Dashboard</MenuItem></Link>
            <Link to="/profile"><MenuItem onClick={handleClose2}>Change Password</MenuItem></Link>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}
