import React from 'react';

import Project from './Project';
import toneShop from '../../images/Tone-shop-preview.png';
import harmoney from '../../images/Harmoney-preview.png';
import slackr from '../../images/Slackr-preview.png';
import weather from '../../images/Weather-preview.png';

const projectDetails = [
  {
    name: toneShop,
    image: toneShop,
    liveLink: 'https://tone-shop.herokuapp.com/',
    codeLink: 'https://github.com/zackjacksongit/Tone-Shop'
  },
  {
    name: weather,
    image: weather,
    liveLink: 'http://colorful-ocean.surge.sh/',
    codeLink: 'https://github.com/zackjacksongit/Weather'
  },
  {
    name: harmoney,
    image: harmoney,
    liveLink: 'https://harmoney-finance.herokuapp.com/',
    codeLink: 'https://github.com/zackjacksongit/HarmoneyV2'
  },
  {
    name: slackr,
    image: slackr,
    liveLink: 'https://slackr-react.herokuapp.com/',
    codeLink: 'https://github.com/zackjacksongit/Slackr'
  }
];

const Projects = () => {
  return (
    <div className="projects wrapper">
      <h2 className="projects__heading heading">Projects</h2>
      <div className="projects__rectangle heading__rectangle" />

      <div className="projects__gallery">
        {projectDetails.map(project => (
          <Project
            key={project.name}
            image={project.image}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
