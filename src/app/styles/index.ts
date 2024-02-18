import { css } from "twin.macro";

const GlobalStyles = css`
  @font-face {
    font-family: "Test Founders Grotesk";
    src: url("/Users/busha/work/blockride-app/src/app/assets/fonts/Test-Founders-Grotesk-Light-300.otf");
    font-weight: 300;
  }

  @font-face {
    font-family: "Test Founders Grotesk";
    src: url("app/assets/fonts/Test-Founders-Grotesk-400.otf");
    font-weight: normal;
  }

  @font-face {
    font-family: "Test Founders Grotesk";
    src: url("app/assets/fonts/Test-Founders-Grotesk-Medium-500.otf");
    font-weight: 500;
  }

  @font-face {
    font-family: "Test Founders Grotesk";
    src: url("app/assets/fonts/Test-Founders-Grotesk-SmB-600.otf");
    font-weight: 600;
  }

  @font-face {
    font-family: "Test Founders Grotesk";
    src: url("app/assets/fonts/Test-Founders-Grotesk Bold 700.otf");
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  *,
  body,
  button {
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    font-family: "Test Founders Grotesk", -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    color: #323947;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  *::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
