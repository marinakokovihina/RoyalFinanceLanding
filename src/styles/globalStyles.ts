import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
  
  *, 
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: "IBM Plex Sans";
    background-color: ${theme.colors.bg};
    color: ${theme.colors.fontPrimary};
    overflow-x: hidden;

  }
  
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

`
