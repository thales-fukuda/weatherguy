/* eslint-env jest */

import configureStore from 'redux-mock-store';

import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('updateCity', () => {
    it('Dispatches the correct action and payload', () => {
      const expectedAction = [
        {
          type: types.CITY_UPDATED,
          payload: {
            city: 'test',
          },
        },
      ];
      store.dispatch(actions.updateCity('test'));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('updateWeather', () => {
    it('Dispatches the correct action and payload', () => {
      const expectedAction = [
        {
          type: types.DATA_UPDATED,
          payload: {
            data: {},
          },
        },
      ];
      store.dispatch(actions.updateWeather({}));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe('updateWeatherStatus', () => {
    it('Dispatches the correct action and payload', () => {
      const expectedAction = [
        {
          type: types.WEATHER_STATUS_UPDATED,
          payload: {
            status: true,
          },
        },
      ];
      store.dispatch(actions.updateWeatherStatus(true));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
