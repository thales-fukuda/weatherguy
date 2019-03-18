import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import Info from './components/Info';
import SearchBar from './components/SearchBar';

const App = () => (
  <Provider store={store}>
    <SearchBar />
    <Info />
  </Provider>
);

export default App;
