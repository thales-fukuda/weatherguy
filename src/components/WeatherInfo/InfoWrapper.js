import styled from 'styled-components';

const InfoWrapper = styled.section`
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 720px) {
    width: 50%;
  }
`;

export default InfoWrapper;
