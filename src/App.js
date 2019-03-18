import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import SearchBar from './components/SearchBar';

const App = () => (
  <Provider store={store}>
    <SearchBar />
  </Provider>
);

export default App;
