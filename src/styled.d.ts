import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    backgroundColor: string;
    primary: string;
    secondary: string;
    textColor: string;
    patternStrokeColor: string;
    backgroundGradient?: string;
  }
}
