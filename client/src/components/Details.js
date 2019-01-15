import React from 'react';

import arrowIcon from '../images/icon-arrow.svg';

const Details = () => {
  return (
    <div className="details section wrapper">
      <div className="details__rectangle-text">
        <img src={arrowIcon} alt="arrow icon" className="details__arrow-icon" />

        <h2 className="details__rectangle-heading">
          Let's start a new <div>project</div>
        </h2>
        <div />
      </div>

      <div className="details__rectangle" />

      <div className="details__line" />

      <div className="details__copy">
        <h2 className="details__heading">
          Design to <div>Deployment</div>
        </h2>
        <p className="details__paragraph">
          Lyft everyday carry meditation microdosing, copper mug bicycle rights
          air plant tilde biodiesel authentic cliche try-hard poke.
        </p>
        <p className="details__paragraph">
          Swag trust fund williamsburg meditation, stumptown vexillologist you
          probably haven't heard of them shabby chic enamel pin la croix
          polaroid.
        </p>
      </div>
    </div>
  );
};

export default Details;
