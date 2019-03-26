import styled from 'styled-components';

const Title = styled.h1`
  color: #ededed;
  position: absolute;
  top: ${props => (props.isWeatherDisplayed ? '5%' : '40%')};
  transition: 1s ease all;
`;

export default Title;
