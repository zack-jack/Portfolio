import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import projectsIcon from '../images/icon-projects.svg';
import resume from '../docs/Resume.pdf';

const Header = () => {
  return (
    <nav className="header wrapper">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__link">
            <div className="header__logo-box">
              <img alt="logo" src={logo} />
            </div>
            <div className="header__logo-text">Zack Jackson</div>
          </Link>
        </div>

        <div className="header__links">
          <Link
            to="/contact"
            className="header__link header__link--contact link--primary"
          >
            Contact Me
          </Link>

          <Link to={resume} target="_blank" className="header__link link">
            Resume
          </Link>

          <Link to="/projects" className="header__link link">
            Projects
            <img
              src={projectsIcon}
              alt="projects icon"
              className="header__projects-icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
