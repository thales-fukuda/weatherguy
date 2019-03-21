import React from 'react';
import PropTypes from 'prop-types';

import InfoBox from '../blocks/InfoBox';

const WeatherInfo = (props) => {
  const {
    weatherData,
  } = props;

  const weather = weatherData.main;

  return (
    <>
      {
        weatherData.main
        && (
        <>
          <InfoBox>
            <InfoBox.Title>Min</InfoBox.Title>
            <InfoBox.Text>{ weather.temp_min }</InfoBox.Text>
          </InfoBox>

          <InfoBox>
            <InfoBox.Icon className='wi wi-day-lightning' />
            <InfoBox.Title>Temperature</InfoBox.Title>
            <InfoBox.Text>{ weather.temp }</InfoBox.Text>
          </InfoBox>

          <InfoBox>
            <InfoBox.Title>Max</InfoBox.Title>
            <InfoBox.Text>{ weather.temp_max }</InfoBox.Text>
          </InfoBox>

          <InfoBox>
            <InfoBox.Text>{ `${weatherData.wind.speed}km/h` }</InfoBox.Text>
          </InfoBox>

          <InfoBox>
            <InfoBox.Text>{ `${weather.humidity}%` }</InfoBox.Text>
          </InfoBox>
        </>
        )
      }
    </>
  );
};

WeatherInfo.propTypes = {
  weatherData: PropTypes.instanceOf(Object).isRequired,
};

export default WeatherInfo;
