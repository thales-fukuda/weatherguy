import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`;

const Loading = styled.section`
  position: absolute;
  bottom: 25%;
  display: flex;
  justify-content: center;
  div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: #eaeaea;
    border-radius: 50%;
    animation: ${animation} 0.6s infinite alternate;
  }
  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export default Loading;
