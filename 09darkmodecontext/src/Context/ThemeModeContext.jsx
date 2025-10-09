import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  ThemeMode: "light",
  toDarkMode: () => {},
  toLightMode: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useThemeContext() {
  return useContext(ThemeContext);
}
