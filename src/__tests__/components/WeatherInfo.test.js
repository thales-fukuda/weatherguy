/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';

describe('<WeatherInfo/>', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const fakeProps = {
        weatherData: {},
        weatherStatus: true,
      };
      const wrapper = shallow(<WeatherInfo {...fakeProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
