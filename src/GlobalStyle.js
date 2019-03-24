import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Slabo+27px');

  * {
    margin: 0;
    padding: 0;
  };

  body {
    background-color: #2E2E2E;
    display: flex;
    justify-content: center;
  }

`;

export default GlobalStyle;
