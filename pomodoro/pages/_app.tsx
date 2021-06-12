import { CssBaseline, ThemeProvider } from "@material-ui/core";
import type { AppProps } from "next/app";
import { globalTheme } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
