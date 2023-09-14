import React from 'react';
import ProjectItem from "./ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import './Blogs.css';

export const Blogs = () => {
  const gradientBackground = {
    background: 'linear-gradient(to bottom right,#CCCCFF, #F5F5F5)',
   
    // Add other styles as needed
  };

  return (
    <div style={gradientBackground}>
      <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem id={idx} name={project.name} image={project.image} />
        ))}
      </div>
    </div>
    </div>
  );
};
