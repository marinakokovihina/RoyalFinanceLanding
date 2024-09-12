import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    font-family: "IBM Plex Sans";
    backgrounФd-color: ${theme.colors.bg};
    color: ${theme.colors.fontPrimary};
    overflow-x: hidden;

  }

  svg {
  }

  .animate__animated {
    -webkit-animation-duration: 1s;
  }

  .animate__fadeInRight {
    -webkit-animation-name: fadeInRight;
  }

  .animate__fadeInLeft {
    -webkit-animation-name: fadeInLeft;
  }

  .animate__fadeInUp {
    -webkit-animation-name: fadeInUp;
  }

  .animate__fadeInUp {
    -webkit-animation-name: fadeInDown;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`
