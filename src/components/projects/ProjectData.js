import React from 'react';
import classes from "./ProjectData.module.scss";

const ProjectData = (props) => {
    console.log(props)
    return ( 
        <div className={classes.ProjectDataLayout} style={{backgroundImage: `url(${props.projectInfo.img})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        
  
        <h1 className={classes.Title}>{props.projectInfo.title}</h1>
        <h1 className={classes.Body}>{props.projectInfo.body}</h1>
        <a className={classes.Btn} href={props.projectInfo.url} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
       
        </div>
     );
}
 
export default ProjectData;