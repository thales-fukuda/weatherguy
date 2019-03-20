import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import WeatherInfo from './components/WeatherInfo';
import SearchBar from './components/SearchBar';

const App = () => (
  <Provider store={store}>
    <SearchBar />
    <WeatherInfo />
  </Provider>
);

export default App;
