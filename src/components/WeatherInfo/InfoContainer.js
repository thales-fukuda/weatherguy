import styled from 'styled-components';
import PropTypes from 'prop-types';

const InfoContainer = styled.section`
  width: 230px;
  margin-top: 15%;
  padding: 15px;
  border: 1px solid rgba(237, 237, 237, .6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: ${props => (props.isWeatherDisplayed ? '1' : '0')};
  transition: 1s ease opacity;
  transition-delay: .5s;
  z-index: 1;

  @media (min-width: 720px) {
    margin-top: 5%;
  }
`;

InfoContainer.propTypes = {
  isWeatherDisplayed: PropTypes.bool.isRequired,
};

export default InfoContainer;
