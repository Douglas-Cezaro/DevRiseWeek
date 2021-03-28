import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { SectionView, SectionImage } from "./styles";
import SplashLogo from "../../../assets/SevenHousesLogo.png";
import { useNavigation } from "@react-navigation/native";

export const SplashScreen = () => {
  const navigator = useNavigation();

  const gotToHomeScreen = () => {
    setTimeout(() => {
      navigator.reset({
        routes: [{ name: "Home" }],
      });
    }, 2000);
  };

  useEffect(() => {
    gotToHomeScreen();
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  );
};
