import React from "react";
import { IconButtonContainer } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export const IconButton = ({ transparent, iconName, onPress, fill }) => {
  return (
    <IconButtonContainer transparent={transparent} onPress={onPress}>
      <Icon name={iconName} color={fill ? "#ffbf00" : "white"} size={20} />
    </IconButtonContainer>
  );
};
