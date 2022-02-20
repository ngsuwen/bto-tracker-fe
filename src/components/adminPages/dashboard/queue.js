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
import CloseIcon from "@mui/icons-material/Close";
import SwipeableViews from "react-swipeable-views";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { DataContext } from "../../../App";
import findOneProjectApi from "../../api/findOneProject";
import getQueueUnitListApi from "../../api/getQueueUnitList";

export default function Message() {
  const [value, setValue] = React.useState(0);
  const [project, setProject] = React.useState({
    unit_breakdown: [0, 0, 0, 0, 0],
  });
  const [state, setState] = React.useState([]);
  const [swipeableComp, setSwipeableComp] = React.useState([]);
  const [queue, setQueue] = React.useState({"r6":[1]})
  
  const { user } = React.useContext(DataContext);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await findOneProjectApi(user.fk_launch);
      setProject(data);
    };
    fetchData();
  }, []);

  // unit types function
  const unitTypes = () => {
    let unitTypes = [];
    project.unit_breakdown.forEach(async(element, index) => {
      if (element !== 0) {
        if (index !== 4) {
          let room = index + 2;
          let rRoom = "r" + room
          if (!state.includes(rRoom)) {
            setState([...state, rRoom]);
          }
          if (!queue[rRoom]){
            const getQueue = await getQueueUnitListApi(user.fk_launch, rRoom);
            setQueue({
              ...queue,
              [rRoom]:getQueue
            })
          }
          unitTypes.push(<Tab label={room + "-Room"} />);
        } else {
          if (!state.includes("gen")) {
            setState([...state, "gen"]);
          }
          if (!queue["gen"]){
            const getQueue = await getQueueUnitListApi(user.fk_launch, "gen");
            setQueue({
              ...queue,
              ["gen"]:getQueue
            })
          }
          unitTypes.push(<Tab label={"3-Gen"} />);
        }
      }
    });
    return unitTypes;
  };

  // entry string
  const messageStr = (date, number) => {
    const dateStr = new Date(date).toString();
    let queueNum = "";
    if (number < 10) {
      queueNum = "00" + number;
    } else if (number < 100) {
      queueNum = "0" + number;
    } else {
      queueNum = number;
    }
    return `Flat Selection on ${dateStr.substr(
      4,
      11
    )} for Queue Number ${queueNum}`;
  };

  // queue list function
  React.useEffect(() => {
    const queueList = () => {
      let queueArr = [];
      let newArr = state.sort();
      newArr.forEach(async (element) => {
        queueArr.push(
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              minWidth: 530,
              bgcolor: "background.paper",
            }}
          >
            {queue[element].map((value, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <>
                    <IconButton>
                      <QuestionMarkIcon sx={{ marginBottom: "0.7rem" }} />
                    </IconButton>
                    <IconButton>
                      <CloseIcon sx={{ marginBottom: "0.7rem" }} />
                    </IconButton>
                  </>
                }
              >
                <ListItemText
                  primary={
                    <Box display="flex">
                      <Typography sx={{ marginBottom: "0.5rem" }}>
                        {messageStr(value.date, value.number)}
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
        );
      });
      setSwipeableComp(queueArr);
    };
    queueList();
  }, [state, queue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "8vh" }}>
        Overview
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        You can edit individual entries here.
      </Typography>

      {/* ---------------------------------------------------------------------------------- */}
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
          {unitTypes()}
        </Tabs>

        {/* ---------------------------------------------------------------------------------- */}

        <SwipeableViews
          index={value}
          onChangeIndex={handleChangeIndex}
          disabled
        >
          {swipeableComp}
        </SwipeableViews>
      </Paper>
    </>
  );
}
