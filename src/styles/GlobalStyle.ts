import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --cyan: hsl(180, 66%, 49%);
    --dark-violet: hsl(257, 27%, 26%);
    --red: hsl(0, 87%, 67%);
    
    --gray: hsl(0, 0%, 75%);
    --grayish-violet: hsl(257, 7%, 63%);
    --very-dark-blue: hsl(255, 11%, 22%);
    --very-dark-violet: hsl(260, 8%, 14%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
`;
