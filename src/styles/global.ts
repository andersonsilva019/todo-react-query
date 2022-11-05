import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button, h1 {
    font: 400 1rem Roboto, sans-serif;
  }

  body {
    background: #29292E; 
  }
`