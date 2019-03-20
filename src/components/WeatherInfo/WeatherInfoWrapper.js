import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';

const mapStateToProps = state => ({
  city: state.weather.city,
  weatherData: state.weather.weatherData,
});

export default connect(
  mapStateToProps,
)(WeatherInfo);
