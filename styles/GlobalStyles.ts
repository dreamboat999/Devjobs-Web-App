import { createGlobalStyle } from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  tablet: customMediaQuery(950),
  phone: customMediaQuery(650),
};

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family:  'Kumbh Sans';
  src: url("../public/KumbhSans/KumbhSans-Regular.ttf") format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
 
}

@font-face {
  font-family:  'Kumbh Sans';
  src: url("../public/KumbhSans/KumbhSans-Bold.ttf") format('truetype');
  font-style: bold;
  font-weight: 700;
  font-display: swap;
 
}

:root {

    /* Primary */
  --color-violet: #5964E0;
  --color-light-violet: #939BF4;


 
  --font-size-heading-xl: 28px;
  --font-size-heading-l: 24px;
  --font-size-heading-m: 20px;
  --font-size-heading-s: 14px;
 
  --font-size-body: 16px;
 
  
  --line-height-header-xl:34px;
  --line-height-header-l:29px;
  --line-height-header-m:24px;
  --line-height-header-s:18px;

  --line-height-body:26px;
 
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: var(--font-size-body);
  background-color: ${({ theme }) => theme.mainBg};
  font-family: 'Kumbh Sans', sans-serif;
  height: fit-content;
}

a {
  text-decoration:none;
}

p {

  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}

main {
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  background-color: transparent;
}

`;
