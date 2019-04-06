import React from 'react';
import PropTypes from 'prop-types';

import InfoField from '../blocks/InfoField';
import InfoContainer from './InfoContainer';

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
          <InfoField>
            <InfoField.Text>
              Temperature:
              <span>
                { `\u00A0\u00A0${toCelsius(weather.temp)} °C\u00A0\u00A0/\u00A0\u00A0${toFahrenheit(weather.temp)} °F` }
              </span>
            </InfoField.Text>
          </InfoField>

          <InfoField>
            <InfoField.Text>
              Min:
              <span>
                {`\u00A0\u00A0${toCelsius(weather.temp_min)} °C\u00A0\u00A0/\u00A0\u00A0${toFahrenheit(weather.temp_min)} °F`}
              </span>
            </InfoField.Text>
          </InfoField>

          <InfoField>
            <InfoField.Text>
              Max:
              <span>
                {`\u00A0\u00A0${toCelsius(weather.temp_max)} °C\u00A0\u00A0/\u00A0\u00A0${toFahrenheit(weather.temp_max)} °F`}
              </span>
            </InfoField.Text>
          </InfoField>

          <InfoField>
            <InfoField.Text>
              Wind:
              <span>
                {`\u00A0\u00A0${weatherData.wind.speed} m/s`}
              </span>
            </InfoField.Text>
          </InfoField>

          <InfoField>
            <InfoField.Text>
              Humidity:
              <span>
                {`\u00A0\u00A0${weather.humidity} %`}
              </span>
            </InfoField.Text>
          </InfoField>
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
