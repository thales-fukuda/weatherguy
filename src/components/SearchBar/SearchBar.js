import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Api from '../../Api';

import Geosuggest from '../elements/Geosuggest';
import Loading from '../elements/Loading';

const SearchBar = (props) => {
  const {
    city,
    updateCity,
    updateWeather,
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
      console.log(data);
      updateWeather(data.data);
    } catch (error) {
      console.log('Algo deu errado', error);
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
    <>
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
    </>
  );
};

SearchBar.propTypes = {
  city: PropTypes.string.isRequired,
  updateCity: PropTypes.func.isRequired,
  updateWeather: PropTypes.func.isRequired,
};

export default SearchBar;
