import { connect } from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  city: state.weather.city,
  weatherData: state.weather.weatherData,
});

export default connect(
  mapStateToProps,
)(Info);
