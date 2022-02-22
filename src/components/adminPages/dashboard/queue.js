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
  Dialog,
  DialogContent
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import DoneIcon from "@mui/icons-material/Done";
import { DataContext } from "../../../App";

// api imports
import findOneProjectApi from "../../api/findOneProject";
import getQueueUnitListApi from "../../api/getQueueUnitList";
import editQueueApi from "../../api/editQueue";
import deleteQueueApi from "../../api/deleteQueue";

export default function Message() {

  // usestates
  const [value, setValue] = React.useState(0);
  const [project, setProject] = React.useState({
    unit_breakdown: [0, 0, 0, 0, 0],
  });
  const [state, setState] = React.useState([]);
  const [swipeableComp, setSwipeableComp] = React.useState([]);
  const [unitTypesTabs, setUnitTypesTabs] = React.useState([]);
  const [queue, setQueue] = React.useState({"r6":[1]})

  const [img, setImg] = React.useState();
  const [openImg, setOpenImg] = React.useState(false);

// user context
const { user } = React.useContext(DataContext);

  // view image
  const openImage=(img)=>{
    setOpenImg(true)
    setImg(img)
  }

  // close image
  const handleCloseImg = () => {
    setOpenImg(false);
  };

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
      newArr.forEach(async (element, num) => { // why need async here?
        queueArr.push(
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              minWidth: 530,
              bgcolor: "background.paper",
            }}
          >
            {queue[num].sort().map((value, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <>
                    <IconButton onClick={()=> editQueue(value.unit_type, value.number, !value.status)}>
                      {value.status?<DoneIcon sx={{ marginBottom: "0.7rem" }} />:<QuestionMarkIcon sx={{ marginBottom: "0.7rem" }} />}
                    </IconButton>
                    <IconButton onClick={()=> deleteQueue(value.unit_type, value.number)}>
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
                        onClick={()=>openImage(value.validation)}
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
  React.useEffect(()=>{
    const unitTypes = async() => {
      let unitTypesComp = [];
      let unitTypesArr = [];

      project.unit_breakdown.forEach((element, index)=>{
        if (element !== 0) {
          if (index !== 4) {
            let room = index + 2;
            let rRoom = "r" + room;
            if (!unitTypesArr.includes(rRoom)) {
              unitTypesArr.push(rRoom)
              unitTypesComp.push(<Tab label={room + "-Room"} />)
            }
          } else {
            if (!unitTypesArr.includes("gen")) {
              unitTypesArr.push("gen")
              unitTypesComp.push(<Tab label="3-Gen" />)
            }
          }
        }
      })
      const promises = unitTypesArr.map(async(element)=>{
        const getQueue = await getQueueUnitListApi(user.fk_launch, element)
        return getQueue
      })
      
      const queueObj = await Promise.all(promises)

      setState(unitTypesArr)
      setUnitTypesTabs(unitTypesComp)
      setQueue(queueObj)
    }
    unitTypes()
  },[project])

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

  // delete queue
  const deleteQueue=async(type, number)=>{
    const result = await deleteQueueApi(user.fk_launch, type, number)
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
          {unitTypesTabs}
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
      <Dialog open={openImg} onClose={handleCloseImg}>
        <DialogContent>
          <img src={img}/>
        </DialogContent>
      </Dialog>
    </>
  );
}
