import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  /* overflow-x: hidden; */
  /* scroll-behavior: smooth; */

}

*, *::after, *:before {
  box-sizing: inherit;
}

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

li {
  list-style-type: none;
}
`;
