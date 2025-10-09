import { useState, useEffect } from "react";
import { ThemeContextProvider } from "./Context/ThemeModeContext";
import { Switcher, Content } from "./Components";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const toDarkMode = () => {
    setThemeMode("dark");
  };

  const toLightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <>
      <ThemeContextProvider value={{ ThemeMode, toDarkMode, toLightMode }}>
        <Switcher />
        <Content />
      </ThemeContextProvider>
    </>
  );
}

export default App;
