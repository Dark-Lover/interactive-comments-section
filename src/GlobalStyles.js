import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Rubik', sans-serif;
    background-color: hsl(239, 57%, 85%);
    font-size: 16px;
}
`;

export default GlobalStyles;
