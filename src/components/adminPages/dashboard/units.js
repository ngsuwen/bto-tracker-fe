import * as React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import getUnitsListApi from "../../api/getUnitsList";
import findOneProjectApi from "../../api/findOneProject";
import { DataContext } from "../../../App";

export default function Units() {
  const [project, setProject] = React.useState({});
  const [blks, setBlks] = React.useState([]);

  const { user } = React.useContext(DataContext);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await findOneProjectApi(user.fk_launch);
      data.launch =
        data.launch[0].toUpperCase() +
        data.launch.slice(1, 3) +
        " " +
        data.launch.slice(3, 7);
      setProject(data);
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      let blocks = [];
      let units = await getUnitsListApi(user.fk_launch);
      units.forEach((element) => {
        if (!blocks.includes(element.blk)) {
          blocks.push(element.blk);
        }
      });
      setBlks(blocks);
    };
    fetchData();
  }, []);

  // display blocks
  const displayBlks = () => {
    let blksArr = [
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/dashboard/`}
    >
      LIST
    </Link>];
    blks.forEach((element, index) => {
      blksArr.push(
        <>
          {" "}
          |{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/dashboard/${user.fk_launch}/${element}`}
          >
            {element}
          </Link>
        </>
      );
    });
    return blksArr;
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        {project.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "0.5rem", marginBottom: "1rem", wordSpacing: "1rem" }}
      >
        {displayBlks()}
      </Typography>
    </Container>
  );
}
