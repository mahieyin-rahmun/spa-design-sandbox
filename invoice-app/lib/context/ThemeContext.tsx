import { createContext, useState } from "react";

export type TTheme = "light" | "dark";

export type TThemeContext = {
  theme: TTheme;
  toggleTheme: () => void;
};

const getThemeSettingsFromStorageOrDefault = () => {
  if (typeof window !== "undefined") {
    return (window.localStorage.getItem("theme") as TTheme) || "light";
  }

  return "light";
};

const setThemeInStorage = (newTheme: TTheme) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("theme", newTheme);
  }
};

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const ThemeContextProvider: React.FC<{}> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeSettingsFromStorageOrDefault);

  const toggleTheme = () => {
    setTheme((previousTheme) => {
      const newTheme = previousTheme === "light" ? "dark" : "light";
      setThemeInStorage(newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
