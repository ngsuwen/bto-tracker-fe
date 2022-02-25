import * as React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import getUnitsListApi from "../../api/getUnitsList";
import getUnitsFeedbackApi from "../../api/getUnitsFeedback";
import { DataContext } from "../../../App";
import MessageScraper from "./messageScraper";

export default function Units() {
  const [messages, setMessages] = React.useState([]);
  const [blks, setBlks] = React.useState([]);

  const { user } = React.useContext(DataContext);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getUnitsFeedbackApi(user.fk_launch);
      setMessages(data);
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
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "8vh" }}>
        Messages
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        These messages require your verification.
      </Typography>

      <MessageScraper data={messages}/>

      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
      Overview
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
