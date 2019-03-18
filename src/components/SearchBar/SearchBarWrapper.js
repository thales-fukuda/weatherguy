import { connect } from 'react-redux';
import { updateCity, updateWeather } from '../../redux/actions';
import SearchBar from './SearchBar';

const mapStateToProps = state => ({
  city: state.weather.city,
});

const mapDispatchToProps = dispatch => ({
  updateCity: city => dispatch(updateCity(city)),
  updateWeather: city => dispatch(updateWeather(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
