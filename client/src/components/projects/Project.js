import React from 'react';
import { withRouter } from 'react-router-dom';

const Project = props => {
  return (
    <div className="project">
      <img
        alt="app preview"
        src={props.image}
        className="project__preview-image"
      />
      <div className="project__actions">
        <button
          className="button button--small project__button"
          onClick={() => window.open(props.liveLink, '_blank')}
        >
          Live Demo
        </button>
        <button
          className="button button--small project__button"
          onClick={() => window.open(props.codeLink, '_blank')}
        >
          View Code
        </button>
      </div>
    </div>
  );
};

export default withRouter(Project);
