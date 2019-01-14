import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer wrapper">
      <div className="footer__container">
        <div className="footer__links">
          <a href="#" className="footer__link">
            Github
          </a>
          <a href="#" className="footer__link">
            LinkedIn
          </a>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">&copy; {date} Zack Jackson</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
