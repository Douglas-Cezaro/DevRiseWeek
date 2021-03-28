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
    style = {
      flex: 1,
      width: "100%",
      backgroundColor: "#1E1D42",
      justifyContent: "center",
      alignItems: "center",
    };
    return <Loading width={200} height={200} style={style} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      {/* <Storybook /> */}
      <HomeScreen />
    </ThemeProvider>
  );
}
