import React from 'react';
import PropTypes from 'prop-types';

import InfoBox from '../blocks/InfoBox';
import InfoWrapper from './InfoWrapper';

const WeatherInfo = (props) => {
  const {
    weatherData,
  } = props;

  const weather = weatherData.main;

  const toCelsius = value => Math.floor(value - 273.15);
  const toFahrenheit = value => Math.floor(toCelsius(value) * 9 / 5 + 32);

  return (
    <>
      {
        weatherData.main
        && (
        <>
          <InfoWrapper>
            <InfoBox>
              <InfoBox.Text fontSize='62px'>{weatherData.name}</InfoBox.Text>
            </InfoBox>
          </InfoWrapper>
          <InfoWrapper>
            <InfoBox opacity='.5'>
              <InfoBox.Text fontSize='16px'>min</InfoBox.Text>
              <InfoBox.Text>{ `${toCelsius(weather.temp_min)} °C` }</InfoBox.Text>
              <InfoBox.Text>{ `${toFahrenheit(weather.temp_min)} °F` }</InfoBox.Text>
            </InfoBox>

            <InfoBox>
              <InfoBox.Text fontSize='62px'>{ `${toCelsius(weather.temp)} °C` }</InfoBox.Text>
              <InfoBox.Text fontSize='62px'>{ `${toFahrenheit(weather.temp)} °F` }</InfoBox.Text>
            </InfoBox>

            <InfoBox opacity='.5'>
              <InfoBox.Text fontSize='16px'>max</InfoBox.Text>
              <InfoBox.Text>{ `${toCelsius(weather.temp_max)} °C` }</InfoBox.Text>
              <InfoBox.Text>{ `${toFahrenheit(weather.temp_max)} °F` }</InfoBox.Text>
            </InfoBox>
          </InfoWrapper>

          <InfoWrapper>
            <InfoBox>
              <InfoBox.Icon className='wi wi-strong-wind' />
              <InfoBox.Text>{ `${weatherData.wind.speed} m/s` }</InfoBox.Text>
            </InfoBox>

            <InfoBox>
              <InfoBox.Icon className='wi wi-rain-wind' />
              <InfoBox.Text>{ `${weather.humidity} %` }</InfoBox.Text>
            </InfoBox>
          </InfoWrapper>
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
