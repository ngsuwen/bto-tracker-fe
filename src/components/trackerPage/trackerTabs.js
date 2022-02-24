// if no data yet
// need to plan how to organize data

import * as React from "react";
import {
  Container,
  Typography,
  IconButton
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import getUnitsListApi from "../api/getUnitsList";
import findOneProjectApi from "../api/findOneProject";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Tabs() {
  const [project, setProject] = React.useState({});
  const [blks, setBlks] = React.useState([])
  const [favourite, setFavourite] = React.useState(false)

  let { launch } = useParams();
  launch = launch.replace("/%20/g", " ");

  React.useEffect(() => {
    const fetchData = async() => {
      const data = await findOneProjectApi(launch);  
      data.launch = data.launch[0].toUpperCase()+data.launch.slice(1,3)+' '+data.launch.slice(3,7)
      setProject(data);
      var storedWatchlist = localStorage.watchlist?JSON.parse(localStorage.watchlist):[];
      setFavourite(storedWatchlist.includes(data.name)?true:false)
    };
    fetchData();
  }, []);

  React.useEffect(()=>{
    const fetchData=async()=>{
      let blocks = []
      let units = await getUnitsListApi(launch)
      units.forEach((element)=>{
        if (!blocks.includes(element.blk)){
          blocks.push(element.blk)
        }
      })
      setBlks(blocks)
    }
    fetchData()
  },[])

  // display blocks
  const displayBlks=()=>{
    let blksArr=[]
    blks.forEach((element)=>{
      blksArr.push(<> | <Link style={{ textDecoration: 'none', color: 'black' }} to={`/tracker/${launch}/${element}`}>{element}</Link></>)
    })
    return blksArr
  }

  // favourite handler
  const favouriteHandler=()=>{
    setFavourite(!favourite)
    var storedWatchlist = localStorage.watchlist?JSON.parse(localStorage.watchlist):[];
    if (favourite){
      storedWatchlist.splice(storedWatchlist.indexOf(project.name),1)
      localStorage.watchlist = JSON.stringify(storedWatchlist);
    } else {
      storedWatchlist.push(project.name)
      localStorage.watchlist = JSON.stringify(storedWatchlist);
    }
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        {project.name}
        <IconButton aria-label="add to favorites" onClick={favouriteHandler}>
          <FavoriteIcon fontSize="small" color={favourite?"error":"inherit"} />
        </IconButton>
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "0.5rem", marginBottom: "1rem", wordSpacing: "1rem" }}
      >
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/tracker/summary/${launch}`}>QUEUE</Link>{displayBlks()}
      </Typography>
      <Typography variant="body2" color="red">
      {(project.admin && project.data_scraper)?"":"Volunteers required: "}
        {(!project.admin && !project.data_scraper)?"Data scrapers, admin.": 
          !project.admin?"Admin":
          !project.data_scraper?"Data scrapers":""}
      </Typography>

    </Container>
  );
}
