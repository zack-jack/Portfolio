import React from 'react';

import Project from './Project';
import toneShop from '../../images/Tone-Shop_preview.jpg';
import slackr from '../../images/Slackr_preview.jpg';
import weather from '../../images/Weather_preview.jpg';

const Projects = () => {
  return (
    <div className="projects wrapper">
      <h2 className="projects__heading heading">Projects</h2>
      <div className="projects__rectangle heading__rectangle" />

      <div className="projects__gallery">
        <Project image={toneShop} />
        <Project image={slackr} />
        <Project image="" />
        <Project image={weather} />
      </div>
    </div>
  );
};

export default Projects;
