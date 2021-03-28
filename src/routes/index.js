import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, HomeScreen, DetailsScreen } from "../screens";

export const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
