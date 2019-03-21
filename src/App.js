import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';

const App = () => (
  <Provider store={store}>
    <SearchBar />
    <WeatherInfo />
  </Provider>
);

export default App;
