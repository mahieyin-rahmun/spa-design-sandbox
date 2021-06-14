import { CssBaseline, ThemeProvider } from "@material-ui/core";
import type { AppProps } from "next/app";
import {
  SettingsContextProvider,
  useSettingsContext,
} from "../context/SettingsContext";
import { globalTheme, getTheme } from "../styles/globals";

const Layout: React.FC<{}> = ({ children }) => {
  const { settingsContext: themeContext } = useSettingsContext();

  return (
    <ThemeProvider
      theme={getTheme(themeContext?.color as string) || globalTheme}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SettingsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SettingsContextProvider>
    </>
  );
}
export default MyApp;
