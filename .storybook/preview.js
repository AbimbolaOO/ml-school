import React from "react";
import { ThemeProvider } from "emotion-theming";
import { GlobalStyles, lightTheme } from "../packages/components/src/Themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const theme = lightTheme;

export const decorators = [
  (Story) => (
    <div style={{ margin: "4em" }}>
      <Story />
    </div>
  ),
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
