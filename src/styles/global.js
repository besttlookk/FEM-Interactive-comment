import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
  --col-primary: hsl(238, 40%, 52%);
  --col-secondary: hsl(239, 57%, 85%);
  --col-danger: hsl(358, 79%, 66%);
  --col-danger-light: hsl(357, 100%, 86%);
  --col-dark:hsl(212, 24%, 26%);
  --col-gray:hsl(211, 10%, 45%);
  --col-gray-light:hsl(223, 19%, 93%);
  --col-light:hsl(228, 33%, 97%);
  --col-white: hsl(0, 0%, 100%);

  --shadow-md: box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);;

  --font-primary: 'Rubik', sans-serif;;

  --text-2xl:font-size: 1.5rem; 
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 100%;
}

body {
  min-height: 100vh;
  font-family: var(--font-primary);
  background-color: var(--col-light);
}

a{
  text-decoration: none;
}
`;
