import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Slabo+27px');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato';
  };

  body {
    height: 100vh;
    background-color: #2E2E2E;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #root {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

`;

export default GlobalStyle;
