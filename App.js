import React from "react";
import { ThemeProvider } from "styled-components";
import { SplashScreen } from "./src/screens";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
}
