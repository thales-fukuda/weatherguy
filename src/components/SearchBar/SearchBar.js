import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Api from '../../Api';

import Input from '../elements/Input';
import Loading from '../elements/Loading';

const SearchBar = (props) => {
  const {
    city,
    updateCity,
    updateWeather,
  } = props;
  const [isLoadingActive, useIsLoadingActive] = useState(false);

  const handleChange = (e) => {
    updateCity(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      try {
        useIsLoadingActive(true);
        const data = await Api.currentWeather(city);
        useIsLoadingActive(false);
        console.log(data);
        updateWeather(data.data);
      } catch (error) {
        console.log('Algo deu errado', error);
      }
    }
  };

  return (
    <>
      <Input
        onChange={e => handleChange(e)}
        onKeyPress={e => handleKeyPress(e)}
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
