import { CITY_UPDATED, DATA_UPDATED, WEATHER_STATUS_UPDATED } from './actionTypes';


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

/**
 * Update weather status
 * @param status
 */
export const updateWeatherStatus = status => ({
  type: WEATHER_STATUS_UPDATED,
  payload: {
    status,
  },
});
