import * as React from "react";
import { Container, TextField, MenuItem, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// api call to get list of projects
const btoProjects = [
  {
    value: "nov21hg",
    label: "Hougang Nov 2021",
  },
  {
    value: "nov21jw",
    label: "Jurong West Nov 2021",
  },
  {
    value: "nov21t",
    label: "Tengah Nov 2021",
  },
  {
    value: "nov21yt",
    label: "Yew Tee Nov 2021",
  },
  {
    value: "nov21k",
    label: "Kallang Nov 2021",
  },
  {
    value: "nov21r",
    label: "Rochor Nov 2021",
  },
];

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

export default function Search() {
  const [bto, setBto] = React.useState("nov21hg");
  const [search, setSearch] = React.useState("info");

  const handleChange = (event) => {
    setBto(event.target.value);
  };

  const handleChange2 = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        marginTop: "40vh"
      }}
    >
      <Box
        sx={{
          bgcolor: "#2e1534",
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
          sx={{ marginRight: "1.5rem", width: "45%", textAlign: "left" }}
          InputProps={{ style: { fontSize: "0.85rem" } }}
        >
          {btoProjects.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Page"
          value={search}
          onChange={handleChange2}
          InputProps={{ style: { fontSize: "0.85rem" } }}
          sx={{ marginRight: "1.5rem", width: "45%", textAlign: "left" }}
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
          sx={{
            py: "0.8rem",
          }}
        />
      </Container>
    </Container>
  );
}
