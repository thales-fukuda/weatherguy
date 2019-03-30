/* eslint-env jest */

import weather from '../../../redux/reducers/weather';

describe('notes', () => {
  describe('initialState', () => {
    it('is correct', () => {
      const action = { type: 'FAKE_ACTION ' };
      const initialState = {
        city: '',
        weatherData: {},
        weatherStatus: false,
      };

      expect(weather(undefined, action)).toEqual(initialState);
    });
  });
});
