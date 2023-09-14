import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const gradientBackground = {
    background: 'linear-gradient(to bottom right,#CCCCFF, #F5F5F5)',
   
    // Add other styles as needed
  };
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project" style={gradientBackground}>
      <h1> {project.name}</h1>
      <h4>{project.disc}</h4>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href="https://github.com/AsifRizwana12">
      <GitHubIcon />
        </a>
      
    </div>
  );
}

export default ProjectDisplay;