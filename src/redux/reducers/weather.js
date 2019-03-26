import { CITY_UPDATED, DATA_UPDATED, WEATHER_STATUS_UPDATED } from '../actionTypes';

const initialState = {
  city: '',
  weatherData: {},
  weatherStatus: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CITY_UPDATED:
      return {
        ...state,
        city: action.payload.city,
      };

    case DATA_UPDATED:
      return {
        ...state,
        weatherData: action.payload.data,
      };

    case WEATHER_STATUS_UPDATED:
      return {
        ...state,
        weatherStatus: action.payload.status,
      };

    default:
      return state;
  }
};
