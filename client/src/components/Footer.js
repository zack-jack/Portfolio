import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer wrapper">
      <div className="footer__container">
        <div className="footer__links">
          <a
            href="https://github.com/zackjacksongit/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/zack-jackson/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
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
