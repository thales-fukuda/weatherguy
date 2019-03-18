import { CITY_UPDATED, DATA_UPDATED } from './actionTypes';


/**
 * Simple actions
 */

/**
 * Update active city.
 * @param city
 */
export const updateCity = city => ({
  type: CITY_UPDATED,
  payload: {
    city,
  },
});

/**
 * Update current city data.
 * @param data
 */
export const updateWeather = data => ({
  type: DATA_UPDATED,
  payload: {
    data,
  },
});
