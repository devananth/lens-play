import { createContext, useContext, useEffect, useState } from "react";

const initialThemeState = {
  theme: "light",
};

const ThemeContext = createContext(initialThemeState);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  const value = { theme, changeTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
