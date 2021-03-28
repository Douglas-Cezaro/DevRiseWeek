import styled from "styled-components/native";
import { action } from "@storybook/addon-actions";
import { text, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { HouseCard } from "./index";

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
  const imgSource =
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80";
  const title = text("Title", "Casa para alugar");
  const description = text("Description", "Avenida Getulio - 100 - Parana");
  const price = number("Price", 200);
  return (
    <HouseCard
      imgSource={imgSource}
      title={title}
      description={description}
      price={price}
    />
  );
});
