import * as React from "react";
import { Container, Box, Tab, Tabs, styled } from "@mui/material";
import { Link } from "react-router-dom";

// custom breakpoint
const nav = (theme) => ({
  [theme.breakpoints.down('md')]: {display:'none'},
  [theme.breakpoints.up('md')]: {bgcolor: "#333333", display:'block'}
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

const StyledTab = styled((props) => <Link style={{ textDecoration: 'none' }} to={`${props.link}`}><Tab disableRipple {...props} /></Link>)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
  })
);

const StyledTab2 = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
    marginRight: theme.spacing(1),
    color: "rgba(31, 199, 106)",
    "&.Mui-selected": {
      color: "#fff",
    },
  })
);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <StyledTab label="Home" link="/"/>
              <StyledTab label="BTO Projects" link="/projects"/>
              <StyledTab label="Tracker" />
              <StyledTab label="Useful links" />
              <StyledTab label="FAQs" />
              <StyledTab label="Disclaimer" />
            </StyledTabs>
          </Box>
          <Box>
            <StyledTabs value={1} aria-label="styled tabs example">
              <StyledTab2 label="+ Contribute" />
              <StyledTab2 label="Sign In" />
            </StyledTabs>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
