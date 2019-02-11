import React from 'react';

import logo from '../images/logo.svg';
import projectsIcon from '../images/icon-projects.svg';

const Header = () => {
  return (
    <nav className="header wrapper">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" className="header__link">
            <div className="header__logo-box">
              <img alt="logo" src={logo} />
            </div>
            <div className="header__logo-text">Zack Jackson</div>
          </a>
        </div>

        <div className="header__links">
          <a
            href="/contact"
            className="header__link header__link--contact link--primary"
          >
            Contact Me
          </a>

          <a href="/resume" className="header__link link">
            Resume
          </a>

          <a href="/projects" className="header__link link">
            Projects
            <img
              src={projectsIcon}
              alt="projects icon"
              className="header__projects-icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
