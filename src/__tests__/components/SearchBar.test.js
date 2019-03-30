/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SearchBar from '../../components/SearchBar/SearchBar';

describe('<SearchBar/>', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const fakeProps = {
        city: '',
        weatherStatus: true,
        updateCity: () => {},
        updateWeather: () => {},
        updateWeatherStatus: () => {},
      };
      const wrapper = shallow(<SearchBar {...fakeProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
