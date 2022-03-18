import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  name: "dark",
  backgroundColor: "#1e293b",
  primary: "#f97316",
  secondary: "#fff",
  textColor: "#fff",
  backgroundGradient:
    "linear-gradient(83.2deg, rgba(33, 31, 88, 1) 10.8%, rgba(43, 54, 87, 1) 94.3%)",
  patternStrokeColor: "rgb(240 232 213 / 0.08)",
};

const lightTheme: DefaultTheme = {
  name: "light",
  backgroundColor: "#FEFEFE",
  primary: "#f97316",
  secondary: "#222",
  textColor: "#121212",
  patternStrokeColor: "rgb(15 23 42 / 0.04)",
};

export { darkTheme, lightTheme };
