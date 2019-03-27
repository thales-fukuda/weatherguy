import React from 'react';
import PropTypes from 'prop-types';

import InfoBox from '../blocks/InfoBox';
import InfoContainer from './InfoContainer';
import InfoWrapper from './InfoWrapper';

const WeatherInfo = (props) => {
  const {
    weatherData,
    weatherStatus,
  } = props;

  const weather = weatherData.main;

  const toCelsius = value => Math.floor(value - 273.15);
  const toFahrenheit = value => Math.floor(toCelsius(value) * 9 / 5 + 32);

  return (
    <InfoContainer isWeatherDisplayed={weatherStatus}>
      {
        weatherData.main
        && (
        <>
          <InfoWrapper>
            <InfoBox>
              <InfoBox.Text fontSize='42px'>{weatherData.name}</InfoBox.Text>
            </InfoBox>
          </InfoWrapper>
          <InfoWrapper>

            <InfoBox>
              <InfoBox.Text fontSize='56px'>{ `${toCelsius(weather.temp)} °C` }</InfoBox.Text>
              <InfoBox.Text fontSize='56px'>{ `${toFahrenheit(weather.temp)} °F` }</InfoBox.Text>
            </InfoBox>

            <div>
              <InfoBox opacity='.5'>
                <InfoBox.Text fontSize='16px'>min</InfoBox.Text>
                <InfoBox.Text>{ `${toCelsius(weather.temp_min)} °C` }</InfoBox.Text>
                <InfoBox.Text>{ `${toFahrenheit(weather.temp_min)} °F` }</InfoBox.Text>
              </InfoBox>
              <InfoBox opacity='.5'>
                <InfoBox.Text fontSize='16px'>max</InfoBox.Text>
                <InfoBox.Text>{ `${toCelsius(weather.temp_max)} °C` }</InfoBox.Text>
                <InfoBox.Text>{ `${toFahrenheit(weather.temp_max)} °F` }</InfoBox.Text>
              </InfoBox>
            </div>

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
    </InfoContainer>
  );
};

WeatherInfo.propTypes = {
  weatherData: PropTypes.instanceOf(Object).isRequired,
  weatherStatus: PropTypes.bool.isRequired,
};

export default WeatherInfo;
