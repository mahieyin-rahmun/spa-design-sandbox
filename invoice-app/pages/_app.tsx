import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import ThemeContextProvider from "../lib/context/ThemeContext";
import useTheme from "../lib/hooks/useTheme";
import { globalDarkTheme, globalLightTheme } from "../styles/globals";

const Wrapper: React.FC<{}> = ({ children }) => {
  // @ts-ignore
  const { theme } = useTheme();

  return (
    <ThemeProvider
      theme={theme === "light" ? globalLightTheme : globalDarkTheme}
    >
      <CssBaseline />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeContextProvider>
  );
}

export default MyApp;
