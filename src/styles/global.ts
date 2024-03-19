import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  background-color: #fff;
}

p {
  font-family: "Roboto", sans-serif;
  line-height: 1.3;

}

h1, h2, h3 {
  font-family: "Baloo 2", sans-serif;
  line-height: 1.3;
}

`