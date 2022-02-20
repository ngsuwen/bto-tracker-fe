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
import SwipeableViews from "react-swipeable-views";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
import { DataContext } from "../../../App";

// api imports
import findOneProjectApi from "../../api/findOneProject";
import getQueueUnitListApi from "../../api/getQueueUnitList";
import editQueueApi from "../../api/editQueue";

export default function Message() {

  // usestates
  const [value, setValue] = React.useState(0);
  const [project, setProject] = React.useState({
    unit_breakdown: [0, 0, 0, 0, 0],
  });
  const [state, setState] = React.useState([]);
  const [swipeableComp, setSwipeableComp] = React.useState([]);
  const [queue, setQueue] = React.useState({"r6":[1]})
  
  // user context
  const { user } = React.useContext(DataContext);

  // useeffect - proj details, for unit_breakdown
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await findOneProjectApi(user.fk_launch);
      setProject(data);
    };
    fetchData();
  }, []);

  // useeffect - queue entries
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
                    <IconButton onClick={()=> editQueue(value.unit_type, value.number, !value.status)}>
                      {value.status?<DoneIcon sx={{ marginBottom: "0.7rem" }} />:<QuestionMarkIcon sx={{ marginBottom: "0.7rem" }} />}
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
  
  // unit types function - table tabs, setqueue
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

  // tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // swipeable change
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // update queue 
  const editQueue=async(type, number, change)=>{
    const result = await editQueueApi(user.fk_launch, type, number, change)
    if (result.message){
      console.log('fail')
    } else {
        window.location.reload()
    }
  }

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
