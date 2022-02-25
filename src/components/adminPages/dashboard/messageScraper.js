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
import editUnitFeedbackApi from "../../api/editUnitFeedback";
import deleteUnitFeedbackApi from "../../api/deleteUnitFeedback";

export default function Message({ data }) {
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
  const messageStr=(unit, available)=>{
    if (available){
      return `${unit} should be Available`
    } else {
      return `${unit} should be Taken`
    }
  }

  // acknowledge message
  const editUnit=async(launch, unit, input, action)=>{
    if (action){
      const deleteUnit = await deleteUnitFeedbackApi(launch, unit)
      if (deleteUnit.status){
        const result = await editUnitFeedbackApi(launch, unit, input)
        if (result.message){
          console.log('fail')
        } else {
            window.location.reload()
        }
      }
    } else {
      const deleteUnit = await deleteUnitFeedbackApi(launch, unit)
      if (deleteUnit.message){
        console.log('fail')
      } else {
          window.location.reload()
      }
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
                <IconButton onClick={()=> editUnit(value.fk_launch, value.unit, value.availability, true)}>
                  <DoneIcon sx={{ marginBottom: "0.7rem" }} />
                </IconButton>
                <IconButton onClick={()=> editUnit(value.fk_launch, value.unit, value.availability, false)}>
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
                    {messageStr(value.unit, value.availability)}
                  </Typography>
                  <ImageSearchIcon
                    onClick={()=>openImage(value.unit_type)}
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
