import styled from "styled-components/native";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { IconButton } from "./index";

const stories = storiesOf("IconButton", module);

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>);
stories.add("Standard", () => {
  const value = text("Icon", "ios-filter");
  return <IconButton iconName={value} />;
});

stories.add("Transparent", () => {
  const value = text("Icon", "filter");
  return <IconButton iconName={value} transparent />;
});
