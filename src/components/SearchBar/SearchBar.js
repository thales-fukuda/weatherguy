import React from 'react';
import Api from '../../Api';

import Input from '../elements/Input';

const SearchBar = (props) => {
  const {
    city,
    updateCity,
    updateWeather,
  } = props;

  const handleChange = (e) => {
    updateCity(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await Api.currentWeather(city);
        updateWeather(data.data);
      } catch (error) {
        console.log('Algo deu errado', error);
      }
    }
  };

  return (
    <Input
      onChange={e => handleChange(e)}
      onKeyPress={e => handleKeyPress(e)}
    />
  );
};

export default SearchBar;
