import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  :root {
    --transparent: transparent;
    --title: #111125;
    --titleInput: #e5e5e5;
    --background: #1f2229;
    --background2: #2e303c;
    --bckModal: #5c606a;
    --addProfile: #4e4b66;
    --body: #4e4b66;
    --container: #777680;
    --white2: #fff;
    --white1: #bec2c6;
    --white: #fbfbfb;
    --background3: #f7f7fc;
    --line: #d6d8e7;
    --inputBg: #eff0f6;
    --purple: #624af2;
    --red: #eb0055;

    --titleDark: #d3d9dc;
    --bodyDark: #b1b499;
    --titleInputDark: #333333;
    //--backgroundDark: #1f2229;
    //--background2Dark: #c7cad7;
    //--bckModalDark: #5c606a;
    //--addProfileDark: #4e4b66;
    //--bodyDark: #4e4b66;
    --containerDark: #383927;
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

  button {
    background: none;
    outline: none;
    border: none;
  }
`

