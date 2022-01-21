import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  :root {
    --transparent: transparent;
    --title: #111125;
    --titleInput: #e5e5e5;
    --background: #1f2229;
    --background2: #2e303c;
    --addProfile: #4e4b66;
    --body: #4e4b66;
    --container: #777680;
    --white2: #fff;
    --white1: #bec2c6;
    --white: #fbfbfb;
    --line: #d6d8e7;
    --inputBg: #eff0f6;
    --purple: #624af2;
    --red: #eb0055;

    --titleDark: #d3d9dc;
    --titleInputDark: #333333;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif !important;
  }

  * {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  button {
    background: none;
    outline: none;
    border: none;
  }
`

