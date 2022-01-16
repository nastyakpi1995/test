import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  :root {
    --title: #14142B;
    --background: #1f2229;
    --transparent: transparent;
    --background2: #2e303c;
    --background-button: #373945;
    --background-button2: #4b4d59;
    --bckModal: #5c606a;
    --addProfile: #4e4b66;
    --body: #4e4b66;
    --lablel: #6e7191;
    --container: #777680;
    --white1: #bec2c6;
    --white: #fbfbfb;
    --background3: #f7f7fc;
    --line: #d6d8e7;
    --offWhite: #fcfcfc;
    --inputBg: #eff0f6;
    --white2: #fff;
    --blue: #3499ce;
    --purple: #624af2;
    --green: #00ba88;
    --orange: #ce8163;
    --red: #eb0055;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif !important;
    background: #E5E5E5;
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

  .container {
    max-width: 1560px;
    margin: 0 auto;
  }

  button {
    background: none;
    outline: none;
    border: none;
  }

  .userIdMain {
    text-align: center;
    margin-bottom: 60px;

    .userIdInfo {
      font-size: 32px;
      line-height: 48px;
      letter-spacing: 1px;
      color: var(--title);
      margin-bottom: 20px;
    }

    .userIdInfo.userStatus {
      font-size: 24px;
      line-height: 36px;
    }
  }
`

