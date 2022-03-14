import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./themes/globalStyles";
import theme from "./themes";

import Home from "./screens/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
