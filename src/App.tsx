import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useLocalStorage } from "./hooks/useLocalStorage";

import GlobalStyles from "./themes/globalStyles";
import { darkTheme, lightTheme } from "./themes";

import Home from "./screens/Home";

import { onKeydown } from "./utils/easterEgg";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);

    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <BrowserRouter basename="/">
          <Routes>
            {/* TODO: Find a good aproach to serve setTheme to the entire application. Thinking on a solution simpler than Context API. */}
            <Route path="/" element={<Home themeSwitcher={setTheme} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
