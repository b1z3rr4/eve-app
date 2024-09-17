import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { theme as defaultTheme } from "../theme";

const ThemeContext = createContext({});

const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: PropsWithChildren<{ theme?: typeof defaultTheme }>) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider as default, ThemeContext };
