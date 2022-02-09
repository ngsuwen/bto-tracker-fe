// pass proj info as prop

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {

  // unit types function
  const unitTypes=()=>{
    let unitTypes=[]
    project.unit_breakdown.forEach((element,index)=>{
      if (element!==0){
        if (index!==4){
          let room = index+2
          unitTypes.push(room+'-Room')
        } else {
          unitTypes.push('3Gen')
        }
      }
    })
    return unitTypes.join(', ')
  }

  // preview img function
  // const previewImage=()=>{
  //   let previewImage=""
  //   if (project)
  //   return previewImage
  // }

  return (
    <Link style={{textDecoration:'none', color:"black"}} to="/info">
      <Box
        sx={{
          borderRadius: "0.4rem",
          backgroundImage:
            `url(${project.preview_url?project.preview_url:project.location_url})`,
          height: 200,
          maxWidth:"100%",
          width: 325,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Typography variant="body1" fontWeight={"bold"} paddingY={"0.2rem"}>{project.name}</Typography>
      <Typography variant="subtitle2" color="text.secondary">{project.no_of_units} units, {unitTypes()}</Typography>
    </Link>
  );
}
