import React from "react";
import { HouseListContainer } from "./styles";
import { HouseCard } from "../../molecules";

export const HousesList = ({ data, children }) => {
  return (
    <HouseListContainer
      data={data}
      renderItem={({ item }) => (
        <HouseCard
          title={item.address.line}
          description={`${
            item.address.neighborhood_name
              ? item.address.neighborhood_name
              : item.address.city
          } - ${item.address.state}`}
          imgSource={item.photos[0].href}
          price={item.community.price_max}
        />
      )}
      keyExtractor={(item) => item.property_id}
      ListHeaderComponent={children}
    />
  );
};
