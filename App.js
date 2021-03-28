import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { HomeScreen } from "./src/screens";
import { theme } from "./src/styles/theme";
import Storybook from "./storybook";
import { useFonts } from "expo-font";
import Loading from "./src/components/atoms/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      {/* <Storybook /> */}
      <HomeScreen />
    </ThemeProvider>
  );
}
