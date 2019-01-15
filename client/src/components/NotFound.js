import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../images/icon-arrow.svg';

const NotFound = () => {
  return (
    <div className="not-found section wrapper">
      <h2 className="not-found__heading heading">404</h2>
      <div className="not-found__rectangle heading__rectangle" />
      <div className="not-found__message">Page not found.</div>
      <Link to="/" className="not-found__button">
        <button type="button" className="button">
          <img
            src={arrowIcon}
            alt="arrow icon"
            className="not-found__arrow-icon"
          />
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
