import React from 'react';

import Project from './Project';

const Projects = () => {
  return (
    <div className="projects section wrapper">
      <h2 className="projects__heading heading">Projects</h2>
      <div className="projects__rectangle heading__rectangle" />

      <div className="projects__gallery">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
