import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  cosnt[(themeValue, setThemeValue)] = useState(themes.light);

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
