import styled from "styled-components/native";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { HouseCard } from "./index";

var image = require("../../../../assets/SevenHousesLogo.png");

const stories = storiesOf("CardHouse", module);

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>);
stories.add("Standard", () => {
  const imgSource = text("imgSource", image);
  return <HouseCard imgSource={imgSource} />;
});
