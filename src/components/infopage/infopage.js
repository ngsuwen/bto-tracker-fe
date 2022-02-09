// api call for proj info
// ref parameter

import * as React from "react";
import { Container, Typography, Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import findOneProjectApi from "../api/findOneProject";

export default function Info() {
  const [project, setProject] = React.useState({});

  let { launch } = useParams();
  launch = launch.replace("/%20/g", " ");

  React.useEffect(() => {
    const fetchData = async() => {
      const data = await findOneProjectApi(launch);  
      data.launch = data.launch[0].toUpperCase()+data.launch.slice(1,3)+' '+data.launch.slice(3,7)
      setProject(data);
    };
    fetchData();
  }, []);

  // unit types function
  const unitTypes=()=>{
    let unitTypes=[]
    project.unit_breakdown.forEach((element,index)=>{
      if (element!==0){
        if (index!==4){
          let room = index+2
          unitTypes.push(
            <>
            <Grid item xs={3}>
              {room+'-Room'}
            </Grid>
            <Grid item xs={9} sx={{ textAlign: "left" }}>
              {element===1?"Not yet released":element}
            </Grid>
            </>
          )
        } else {
          unitTypes.push(
            <>
            <Grid item xs={3}>
              {'3Gen'}
            </Grid>
            <Grid item xs={9} sx={{ textAlign: "left" }}>
              {element===1?"Not yet released":element}
            </Grid>
            </>
          )
        }
      }
    })
    return unitTypes
  }

  // unit price function
  const unitPrices=()=>{
    let unitPrices=[]
    project.unit_breakdown.forEach((element,index)=>{
      if (element!==0){
        if (index!==4){
          let room = index+2
          let price_range = `price_range_${room}R`
          unitPrices.push(
            <>
            <Grid item xs={3}>
              {room+'-Room'}
            </Grid>
            <Grid item xs={9} sx={{ textAlign: "left" }}>
              {element===1?"Not yet released":`$${project[`${price_range}`][0].value.toString().slice(0,3)},000 - $${project[`${price_range}`][1].value.toString().slice(0,3)},000`}
            </Grid>
            </>
          )
        } else {
          unitPrices.push(
            <>
            <Grid item xs={3}>
              {'3Gen'}
            </Grid>
            <Grid item xs={9} sx={{ textAlign: "left" }}>
              {element===1?"Not yet released":`$${project.price_range_3Gen[0].value.toString().slice(0,3)},000 - $${project.price_range_3Gen[1].value.toString().slice(0,3)},000`}
            </Grid>
            </>
          )
        }
      }
    })
    return unitPrices
  }

  // articles function
  const articlesList=()=>{
    let articlesList=[]
    project.articles.forEach((element, index)=>{
      let articleSections = element.split('.')
      articlesList.push(
        <>
        {index===0?"": " | "}
        <a href={element} 
        target="_blank"
        rel="noopener noreferrer"
        >{articleSections[1]}
        </a>
        </>
      )
    })
    return articlesList
  }

  return (
    <>
    {project.name?
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        {project.name}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
        {project.launch}
        {/* November 2021 BTO */}
      </Typography>
      <Typography variant="body2" color="red">
        {(project.admin && project.data_scraper)?"":"Volunteers required: "}
        {(!project.admin && !project.data_scraper)?"Data scrapers, admin.": 
          !project.admin?"Admin":
          !project.data_scraper?"Data scrapers":""}
        {/* * Volunteers required: Data scrapers, admin. Apply here. */}
      </Typography>
      {project.preview_url?
      <>
      <img
        style={{ marginTop: "1.5rem", maxWidth: "100%", width: 500 }}
        alt="render"
        src={project.preview_url}
      />
      <Typography variant="subtitle2">Source: HDB</Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
      >
        To track units, click{" "}
        <Link
          style={{ textDecoration: "none" }}
          to="/tracker/summary"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </Link>
      </Typography>
      <Divider />

      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Project Details
      </Typography>
      </>
      :""}

      <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
        <b>Area: </b>
        {project.location}
        <br />
        <br />
        <b>Flat Types & Number of Units: </b>
        <br />
        <Grid container>
          {unitTypes()}
        </Grid>
        <br />
        <b>Pricing: </b>
        <br />
        <Grid container>
          {unitPrices()}
        </Grid>
        <br />
        <b>Status: </b>{project.status==="ongoing"?"BTO selection in progress":"Upcoming launch"}
        <br />
      </Typography>

      <img
        style={{ marginTop: "1.5rem", maxWidth: "100%", width: 500 }}
        alt="location_map"
        src={project.location_url}
      />
      <Typography variant="subtitle2" sx={{ marginBottom: "1.5rem" }}>
        Source: HDB
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}
      >
        <b>Recommended Articles: </b>
        {project.articles[0]===""?"-":articlesList()}
        <br />
      </Typography>

    </Container>:""}
    </>
  );
}
