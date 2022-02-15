// to do search button
// pass proj list from homepage

import * as React from "react";
import { Container, TextField, MenuItem, Typography, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataContext } from "../../App";

// page destination
const searchFx = [
  {
    value: "info",
    label: "Project Information",
  },
  {
    value: "tracker",
    label: "Tracker",
  },
];

// custom breakpoints
const searchText = (theme) => ({
  [theme.breakpoints.down(500)]: { marginBottom:"1rem", width: "100%", textAlign: "left" },
  [theme.breakpoints.up(500)]: { marginRight: "1.5rem", width: "40%", textAlign: "left" },
  [theme.breakpoints.up('sm')]: { marginRight: "1.5rem", width: "40%", textAlign: "left" },
  [theme.breakpoints.up('md')]: { marginRight: "1.5rem", width: "45%", textAlign: "left" },
});

const searchButton = (theme) => ({
  [theme.breakpoints.down(500)]: { width:"100%", display: "block" },
  [theme.breakpoints.up(500)]: { display: "none" }
});

const searchIcon = (theme) => ({
  [theme.breakpoints.down(500)]: { display: "none" },
  [theme.breakpoints.up(500)]: { py: "0.8rem" }
});

const searchBoxOffset = (theme) => ({
  [theme.breakpoints.down("md")]: {
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    marginTop: "calc(15vh)"
  },
  [theme.breakpoints.up("md")]: {
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    marginTop: "calc(20vh + 50px)"
  }
});

export default function Search() {
  const [search, setSearch] = React.useState("");
  const { projList } = React.useContext(DataContext);
  const [bto, setBto] = React.useState("");

  // project list function
  const projectList =()=>{
    let projectArr=[]
    projList.sort()
    projList.forEach((element,index)=>{
      projectArr.push(
      <MenuItem key={element} value={element}>
        {element[0].toUpperCase()+element.slice(1,3)+' '+element.slice(3,7)+' '+element[7].toUpperCase()+element.slice(8)}
      </MenuItem>
      )
    })
    return projectArr.sort()
  }

  const handleChange = (event) => {
    setBto(event.target.value);
  };

  const handleChange2 = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container
      maxWidth="md"
      sx={searchBoxOffset}
    >
      <Box
        sx={{
          bgcolor: "#333333",
          borderRadius: "0.2rem 0.2rem 0 0",
          py: "0.3rem",
          px: "0.75rem",
          marginLeft: "1rem"
        }}
      >
        <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
          Quick Search
        </Typography>
      </Box>
      <Container
        sx={{
          bgcolor: "white",
          borderRadius: "0.4rem",
          boxShadow: "2px 2px 10px #aaaaaa",
          padding: "1.5rem",
        }}
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Projects"
          value={bto}
          onChange={handleChange}
          sx={searchText}
          InputProps={{ style: { fontSize: "0.85rem" } }}
        >
          {projectList()}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Page"
          value={search}
          onChange={handleChange2}
          InputProps={{ style: { fontSize: "0.85rem" } }}
          sx={searchText}
        >
          {searchFx.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <SearchIcon
          fontSize="medium"
          filled="true"
          sx={searchIcon}
        />
        <Button variant="contained" sx={searchButton}>Submit</Button>
      </Container>
    </Container>
  );
}
