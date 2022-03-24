import { ThemeProvider } from "styled-components";
import AppProvider from "../contexts/appContext";
import { GlobalStyle } from "../styles/global";
import { Wrapper } from "../styles/shared";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
