import React from 'react';

import arrowIcon from '../images/icon-arrow.svg';

const Details = () => {
  return (
    <div className="details section wrapper">
      <div className="details__rectangle-text">
        <img src={arrowIcon} alt="arrow icon" className="details__arrow-icon" />

        <h2 className="details__rectangle-heading">
          Let's start a <div>project together</div>
        </h2>
        <div />
      </div>

      <div className="details__rectangle" />

      <div className="details__body">
        <div className="details__line" />

        <div className="details__copy">
          <h2 className="details__heading">
            Design to <div>Deployment</div>
          </h2>
          <p className="details__paragraph">
            In the era of digital marketing, your online brand can make or break
            your business. In partnering with you, I can provide the tools
            necessary to build your online brand presence and better engage your
            customers through elegant digital solutions.
          </p>
          <p className="details__paragraph">
            From concept sketch to web browser, every step my process is
            meticulously thought out to meld a synchronous relationship between
            good UI/UX design and cutting edge development technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
