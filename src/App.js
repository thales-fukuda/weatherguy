import React from 'react';
import Api from './Api';

const call = async () => {
  const response = await Api.currentWeather('curitiba');
  console.log(response);
};

call();

const App = () => (
  <h1>teste</h1>
);

export default App;
