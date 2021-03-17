import { createGlobalStyle, ThemeProvider } from "styled-components";
import CTA from "../components/CTA";
import Ticker from "../components/Ticker";
import GlobalStyles from "../utils/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      {/* <Ticker /> */}
      {/* <CTA /> */}
      <Component {...pageProps} />
    </>
  );
}
