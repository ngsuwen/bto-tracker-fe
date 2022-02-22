import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Paper,
  Dialog, 
  DialogContent
} from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import editQueueAckApi from "../../api/editQueueAck";

export default function MessageAdmin({ data }) {
  const [img, setImg] = React.useState();
  const [openImg, setOpenImg] = React.useState(false);
  
  // view image
  const openImage=(img)=>{
    setOpenImg(true)
    setImg(img)
  }

  // close image
  const handleCloseImg = () => {
    setOpenImg(false);
  };
  
  // message str
  const messageStr=(type, date, number)=>{
    const dateStr = new Date(date).toString()
    let queueNum = ''
    if (number<10){
      queueNum='00'+number
    } else if (number<100){
      queueNum='0'+number
    } else {
      queueNum = number
    }
    if (type[0]==="r"){
      return `${type[1]}-room Flat Selection on ${dateStr.substr(4,11)} for Queue Number ${queueNum}`
    } else {
      return `3-Gen Flat Selection on ${dateStr.substr(4,11)} for Queue Number ${queueNum}`
    }
  }

  // acknowledge message
  const editQueue=async(launch, type, number, change)=>{
    const result = await editQueueAckApi(launch, type, number, change)
    if (result.message){
      console.log('fail')
    } else {
        window.location.reload()
    }
  }

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{ maxHeight: 300, overflow: "auto" }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          minWidth: 530,
          bgcolor: "background.paper",
        }}
      >
        {data.map((value, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton onClick={()=> editQueue(value.fk_launch, value.unit_type, value.number, true)}>
                  <DoneIcon sx={{ marginBottom: "0.7rem" }} />
                </IconButton>
                <IconButton onClick={()=> editQueue(value.fk_launch, value.unit_type, value.number, false)}>
                  <CloseIcon
                    sx={{ marginBottom: "0.7rem" }}
                  />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={
                <Box display="flex" sx={{ minWidth: 500 }}>
                  <Typography sx={{ marginBottom: "0.5rem" }}>
                    {messageStr(value.unit_type, value.date, value.number)}
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
        {data.length===0?
          <Typography display={'flex'} justifyContent={'center'}>
            No new messages
          </Typography>:""
        }
      </List>
      <Dialog open={openImg} onClose={handleCloseImg}>
        <DialogContent>
          <img src={img}/>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
