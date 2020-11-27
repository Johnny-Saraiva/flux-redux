import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background-image.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #7159c1 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-size: 1.4rem;
    font-family: Roboto, sans-serif;
  }

  #root {
    max-width: 102rem;
    margin: 0 auto;
    padding: 0 2rem 5rem;
  }

  button {
    cursor: pointer;
  }
`;
