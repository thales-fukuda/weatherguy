import styled from 'styled-components';

const SearchContainer = styled.section`
  position: absolute;
  top: ${props => (props.isWeatherDisplayed ? '25%' : '35%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s ease all;
`;

export default SearchContainer;
