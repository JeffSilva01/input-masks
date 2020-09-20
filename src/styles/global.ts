import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #__next {
  height: 100%;
  background: var(--BG);
}

body, input, button {
  font: 400 16px Roboto, sans-serif;
}

input {
  border: none;
}

:root {
  --BGDark: #13111B;
  --BG: #191622;
  --color0: #5A4B81;
  --color1: #FF79C6;
}
`
