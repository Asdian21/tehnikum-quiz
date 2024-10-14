import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(themes.light);

  useEffect(() => {
    const presistedTheme = localStorage.getItem("currentTheme");
    if (presistedTheme) {
      setThemeValue(JSON.parse(presistedTheme));
    }
  }, []);

  const toggleTheme = () => {
    setThemeValue((prev) => {
      let newTheme = prev === themes.light ? themes.dark : themes.light;
      localStorage.setItem("currentTheme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const contextValue = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
    };
  }, [themeValue]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
