import styled from "styled-components/native";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Input } from "./index";

const stories = storiesOf("Input", module);

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>);
stories.add("Standard", () => {
  const placeholder = text("Placeholder", "Digite aqui a localização");
  const label = text("Label", "Localização");
  return <Input placeholder={placeholder} label={label} />;
});
