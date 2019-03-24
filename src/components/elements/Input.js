import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  color: #f2f2f2;
  border: none;
  border-radius: 19px;
  height: 30px;
  width: 230px;
  background: rgba(255, 255, 255, .1);
  box-sizing: border-box;
  &:focurs {
    color: #f2f2f2;
  }
  &::placeholder {
    color: #f2f2f2;
    opacity: .22;
  }
`;

export default Input;
