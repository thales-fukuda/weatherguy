import React from 'react';

import Title from '../elements/Title';

const Info = (props) => {
  const {
    weatherData,
  } = props;

  return (
    <>
      {
        weatherData.main
        && (
        <>
          <Title>Temperature</Title>
          <p>{ weatherData.main.temp }</p>
        </>
        )
      }
    </>
  );
};

export default Info;
