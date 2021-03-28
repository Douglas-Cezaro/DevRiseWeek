import styled from "styled-components/native";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { HousesList } from "./index";

const stories = storiesOf("HousesList", module);

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

stories.addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>);
stories.add("Standard", () => {
  const mockArray = [
    {
      property_id: "1",
      address: {
        line: "Casa a venda",
        neighborhood_name: "Rua teste, s/n",
        city: "Dois Vizinhos",
        state: "Parana",
      },
      photos: [
        {
          href:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
        },
      ],
      community: { price_max: 2000 },
    },
    {
      property_id: "2",
      address: {
        line: "Casa a venda",
        neighborhood_name: "Rua teste, s/n",
        city: "Dois Vizinhos",
        state: "Parana",
      },
      photos: [
        {
          href:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
        },
      ],
      community: { price_max: 2000 },
    },
    {
      property_id: "3",
      address: {
        line: "Casa a venda",
        neighborhood_name: "Rua teste, s/n",
        city: "Dois Vizinhos",
        state: "Parana",
      },
      photos: [
        {
          href:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
        },
      ],
      community: { price_max: 2000 },
    },
  ];
  return <HousesList data={mockArray} />;
});
