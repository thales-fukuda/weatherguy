import React from 'react';
import Api from './Api';

import SearchBar from './components/SearchBar';

const call = async () => {
  const response = await Api.currentWeather('curitiba');
  console.log(response);
};

call();

const App = () => (
  <SearchBar />
);

export default App;
