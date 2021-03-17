import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";
const GlobalStyles = createGlobalStyle`
@import url(//db.onlinewebfonts.com/c/2ae387e9fd826eca2b02f780e91333c7?family=Akkurat+Mono);

@font-face {font-family: "Akkurat Mono"; src: url("//db.onlinewebfonts.com/t/2ae387e9fd826eca2b02f780e91333c7.eot"); src: url("//db.onlinewebfonts.com/t/2ae387e9fd826eca2b02f780e91333c7.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/2ae387e9fd826eca2b02f780e91333c7.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/2ae387e9fd826eca2b02f780e91333c7.woff") format("woff"), url("//db.onlinewebfonts.com/t/2ae387e9fd826eca2b02f780e91333c7.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/2ae387e9fd826eca2b02f780e91333c7.svg#Akkurat Mono") format("svg"); } 
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: ${COLORS.pink};
  font-family: Akkurat Mono, Arial, Helvetica, sans-serif;
  
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */


/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export default GlobalStyles;
