import {createGlobalStyle} from 'styled-components'
import {theme} from '../styles/Theme'
export const GlobalStyles = createGlobalStyle`
*,
*::before
*::after {
margin:0;
padding:0;
box-sizing:border-box;
}

body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:${theme.color.secondbg};
  }

  a {
  text-decoration:none;
    color:${theme.color.font};
  }

  ul {
  list-style:none;
  }
  
 button {
 background-color: unset;
 border:none;
 }
  `