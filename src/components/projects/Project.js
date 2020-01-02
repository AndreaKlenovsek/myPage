import React, { Component } from 'react';
import classes from './Projects.module.scss';
import Button from './Button';
import ProjectData from './ProjectData';
import projectFiles from "./projects.json";



class Project extends Component {
    state = { 
     projects: [],
     start: 0,
     end: 3,
     resPerBtn: 3,
     projectsLength: null,
    currId: 1,
     }

    componentDidMount() {
        this.setState({
        projects: projectFiles,
        projectsLength: projectFiles.length,
        })
    }

    handleProjectDisplay = (e) => {
    const pageId = e.target.dataset.page;
    const start = (pageId - 1) * this.state.resPerBtn;
    const end = pageId * this.state.resPerBtn;
    
    
    this.setState({
    start: start,
    end: end,
    currId: +pageId,
    })
    }




    render() { 
    const updatedProjects = this.state.projects.map(project => {
    return (
        <ProjectData projectInfo={project} key={project.id}/>
    )
    }).slice(this.state.start, this.state.end);

    
    const btnArray = [...Array(Math.ceil(this.state.projectsLength / this.state.resPerBtn))].map((_, i) => {
    return (
        <Button  key={i + 1} id={Number(i + 1)} curId={this.state.currId} clicked={this.handleProjectDisplay}>{"0" + (i + 1)}</Button>
    )
    })


        return ( 
            <div className={classes.Project}>
                <h1>My Projects</h1>
                <p className={classes.Small}>* All project listed below were made during my independent learning process, therefore they were not used in any kind of business environment</p>
                <div className={classes.ProjectLayout}>
                {updatedProjects}
                </div>
            <div className={classes.Buttons}>
                {btnArray}
            </div>
            </div>
         );
    }
}
 
export default Project;