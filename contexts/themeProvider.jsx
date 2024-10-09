import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext, themes } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  cosnt[(themeValue, setThemeValue)] = useState(themes.light);

  useEffect(() => {
    const presistedTheme = localStorage.getItem(
      "currentTheme",
      JSON.parse(newTheme)
    );
    if (presistedTheme) {
      setThemeValue(presistedTheme);
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    setThemeValue((prev) => {
      let newTheme = prev === themes.light ? themes.dark : theme.light;
      localStorage.setItem("currentTheme", JSON.stringify(newTheme));
      return newTheme;
    });
    // setThemeValue(themeValue === themes.dark ? themes.light : themes.dark);
  };

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
