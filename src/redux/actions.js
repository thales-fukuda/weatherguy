import store from './store';
import Api from '../Api';

import { CITY_UPDATED, DATA_UPDATED } from './actionTypes';


/**
 * Simple actions
 */

/**
 * Update active city.
 * @param city
 */
export const cityUpdated = city => ({
  type: CITY_UPDATED,
  payload: {
    city,
  },
});

/**
 * Update current city data.
 * @param data
 */
export const dataUpdated = data => ({
  type: DATA_UPDATED,
  payload: {
    data,
  },
});


/**
 * Complex actions.
 */

export const updateCity = (city) => {
  store.dispatch(cityUpdated(city));
};

export const updateWeather = (city) => {
  const data = Api.currentWeather(city);
  store.dispatch(dataUpdated(data));
};
