import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
body {
  margin: 0;
  padding: 20px 40px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}
`;
