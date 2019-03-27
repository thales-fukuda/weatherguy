import styled from 'styled-components';

const InfoContainer = styled.section`
  width: 100%;
  height: 85%;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: ${props => (props.isWeatherDisplayed ? '1' : '0')};
  transition: 1s ease opacity;
  transition-delay: .5s;
  z-index: 1;

  @media (min-width: 720px) {
    padding-top: 5%;
  }
`;

export default InfoContainer;
