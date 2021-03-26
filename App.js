import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { HomeScreen } from "./src/screens";
import { theme } from "./src/styles/theme";
import Storybook from "./storybook";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      <HomeScreen />
    </ThemeProvider>
  );
}
