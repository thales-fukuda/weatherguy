import { CITY_UPDATED, DATA_UPDATED } from '../actionTypes';

const initialState = {
  city: '',
  weatherData: {},
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

    default:
      return state;
  }
};
