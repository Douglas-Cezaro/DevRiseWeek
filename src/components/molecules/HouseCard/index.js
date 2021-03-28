import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from "./styles";
import { CardTitle, CardHighLitghtText, CardDescription } from "../../atoms";
import { FormattedPrice } from "../../../utils";
export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigator = useNavigation();

  const onClickItemContainer = () => {
    navigator.navigate("Details", {
      selectedHouse: {
        property_id: item.property_id,
        photos: [
          {
            href: item.photos[1].href,
          },
        ],
      },
    });
  };

  return (
    <CardContainer onPress={() => onClickItemContainer()}>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighLitghtText>{FormattedPrice(price)}</CardHighLitghtText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
