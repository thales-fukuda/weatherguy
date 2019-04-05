import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Api from '../../Api';

import Geosuggest from '../elements/Geosuggest';
import Loading from '../elements/Loading';
import Title from '../elements/Title';

import SearchContainer from './SearchContainer';

const SearchBar = (props) => {
  const {
    city,
    weatherStatus,
    updateCity,
    updateWeather,
    updateWeatherStatus,
  } = props;

  const [isLoadingActive, useIsLoadingActive] = useState(false);

  const handleChange = (value) => {
    updateCity(value);
  };

  const handleUpdateWeather = async (value) => {
    try {
      useIsLoadingActive(true);
      const data = await Api.currentWeather(value);
      useIsLoadingActive(false);
      updateWeatherStatus(true);
      updateWeather(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSuggestSelect = (value) => {
    if (value) {
      handleChange(value.description);
      handleUpdateWeather(value.description);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUpdateWeather(city);
    }
  };

  return (
    <SearchContainer isWeatherDisplayed={weatherStatus}>
      <Title>Weatherguy</Title>
      <Geosuggest
        types={['(cities)']}
        onChange={e => handleChange(e)}
        onSuggestSelect={value => handleSuggestSelect(value)}
        onKeyDown={e => handleKeyPress(e)}
        placeholder='search for a city...'
        value={city}
      />
      {
        isLoadingActive
        && (
          <Loading>
            <div />
            <div />
            <div />
          </Loading>
        )
      }
    </SearchContainer>
  );
};

SearchBar.propTypes = {
  city: PropTypes.string.isRequired,
  weatherStatus: PropTypes.bool.isRequired,
  updateCity: PropTypes.func.isRequired,
  updateWeather: PropTypes.func.isRequired,
  updateWeatherStatus: PropTypes.func.isRequired,
};

export default SearchBar;
