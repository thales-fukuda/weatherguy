import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: #ededed;
  position: absolute;
  top: ${props => (props.isWeatherDisplayed ? '5%' : '40%')};
  transition: 1s ease all;
`;

Title.propTypes = {
  isWeatherDisplayed: PropTypes.bool.isRequired,
};

export default Title;
