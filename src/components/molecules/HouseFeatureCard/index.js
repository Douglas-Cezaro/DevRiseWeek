import React from "react";
import { FeatureCardContainer } from "./styles";
import { DetailText } from "../../atoms";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";

export const HouseFeatureCard = ({ iconName, featureText, iconLib }) => {
  return (
    <FeatureCardContainer>
      {iconLib === "fontawesome" && (
        <IconFontAwesome name={iconName} color="white" size={30} />
      )}

      {iconLib === "materialcommunity" && (
        <Icon name={iconName} color="white" size={35} />
      )}

      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
