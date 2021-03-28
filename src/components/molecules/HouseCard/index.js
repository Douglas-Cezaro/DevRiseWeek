import React from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from "./styles";
import { CardTitle, CardHighLitghtText, CardDescription } from "../../atoms";

export const HouseCard = ({ imgSource, title, description, price }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighLitghtText>
            {formattedPrice.format(price)}
          </CardHighLitghtText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
