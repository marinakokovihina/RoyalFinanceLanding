import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
export const GlobalStyles = createGlobalStyle`
  //@font-face {
  //  font-family: 'IBMPlexSans';
  //  src: url('../assets/fonts/IBMPlexSans-Regular.ttf') format('truetype') ;
  //  src: local() ;
  //  font-weight: normal;
  //  font-display: swap;
  //  font-style: normal;
  //}
  //
  //@font-face {
  //  font-family: 'IBMPlexSans';
  //  src: url('../assets/fonts/IBMPlexSans-SemiBold.ttf') format('truetype');
  //  font-weight: 600;
  //  font-style: normal;
  //  font-display: swap;
  //
  //}
  //@font-face {
  //  font-family: 'IBMPlexSans';
  //  src: url('../assets/fonts/IBMPlexSans-Medium.ttf') format('truetype');
  //  font-weight: 500;
  //  font-style: normal;
  //  font-display: swap;
  //
  //}
  //@font-face {
  //  font-family: 'IBMPlexSans';
  //  src: url('../assets/fonts/IBMPlexSans-Bold.ttf') format('truetype');
  //  font-weight: 700;
  //  font-style: normal;
  //  font-display: swap; 
  //
  //}

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
