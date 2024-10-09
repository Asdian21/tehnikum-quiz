import { createContext } from "react";

export const themes = {
  dark: "dark",
  light: "light",
};

const initialState = {
  theme: themes.light,
  toggleTheme: () => {},
};
