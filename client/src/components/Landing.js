import React from 'react';

const Landing = () => {
  return (
    <div className="landing section wrapper">
      <div className="landing__content">
        <div className="landing__rectangle" />

        <div className="landing__line-container">
          <div className="landing__line landing__line--1" />
          <div className="landing__line landing__line--2" />
        </div>

        <div className="landing__heading">
          <h1 className="landing__title">
            Full Stack
            <div className="landing__title landing__title--new-line">
              Developer
            </div>
          </h1>
        </div>

        <div className="landing__subheading">
          <p className="landing__subtitle">
            Based out of Charlotte, North Carolina
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
