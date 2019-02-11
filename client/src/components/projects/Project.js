import React from 'react';

const Project = props => {
  return (
    <div className="project">
      <img
        alt="app preview"
        src={props.image}
        className="project__preview-image"
      />
      <div className="project__actions">
        <button className="button project__button">Live Demo</button>
        <button className="button project__button">View Code</button>
      </div>
    </div>
  );
};

export default Project;
