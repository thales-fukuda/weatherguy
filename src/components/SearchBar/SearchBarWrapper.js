import { connect } from 'react-redux';
import { updateCity, updateWeather, updateWeatherStatus } from '../../redux/actions';
import SearchBar from './SearchBar';

const mapStateToProps = state => ({
  city: state.weather.city,
  weatherStatus: state.weather.weatherStatus,
});

const mapDispatchToProps = dispatch => ({
  updateCity: city => dispatch(updateCity(city)),
  updateWeather: city => dispatch(updateWeather(city)),
  updateWeatherStatus: status => dispatch(updateWeatherStatus(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
