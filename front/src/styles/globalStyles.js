import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  :root {
    --transparent: transparent;
    --titleLight: #14142B;
    --titleInputLight: #e5e5e5;
    --backgroundLight: #1f2229;
    --background2Light: #2e303c;
    --bckModalLight: #5c606a;
    --addProfileLight: #4e4b66;
    --bodyLight: #4e4b66;
    --containerLight: #777680;
    --white2Light: #fff;
    --white1Light: #bec2c6;
    --whiteLight: #fbfbfb;
    --background3Light: #f7f7fc;
    --lineLight: #d6d8e7;
    --inputBgLight: #eff0f6;
    --purpleLight: #624af2;
    --redLight: #eb0055;

    --titleDark: #d3d9dc;
    --titleInputDark: #1f2229;
    //--backgroundDark: #1f2229;
    --background2Dark: #c7cad7;
    //--bckModalDark: #5c606a;
    //--addProfileDark: #4e4b66;
    //--bodyDark: #4e4b66;
    //--containerDark: #777680;
    //--white2Dark: #fff;
    //--white1Dark: #bec2c6;
    //--whiteDark: #fbfbfb;
    //--background3Dark: #f7f7fc;
    //--lineDark: #d6d8e7;
    //--inputBgDark: #eff0f6;
    //--purpleDark: #624af2;
    //--redDark: #eb0055;
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
      color: var(--titleLight);
      margin-bottom: 20px;
    }

    .userIdInfo.userStatus {
      font-size: 24px;
      line-height: 36px;
    }
  }
`

