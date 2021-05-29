import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-family: AppleSDGothicNeo;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

#app {
  width: 100vw;
  height: 100vh;
}

@font-face {
  font-family: "imact";
  src: url("../font/impact.ttf");
}

@font-face {
  font-family: "AppleSDGothicNeo";
  src: url("../font/AppleSDGothicNeo.ttf");
}

`;

export default GlobalStyle;
