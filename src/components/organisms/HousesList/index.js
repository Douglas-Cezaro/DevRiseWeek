import React from "react";
import { HouseListContainer } from "./styles";
import { HouseCard } from "../../molecules";

export const HousesList = ({
  data,
  children,
  ListFooterComponent,
  onEndReached,
}) => {
  return (
    <HouseListContainer
      data={data}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={ListFooterComponent}
      renderItem={({ item }) => (
        <HouseCard
          item={item}
          title={item.address.line}
          description={`${
            item.address.neighborhood_name
              ? item.address.neighborhood_name
              : item.address.city
          } - ${item.address.state}`}
          imgSource={item.photos[0].href}
          price={
            item.community
              ? item.community.price_max
                ? item.community.price_max
                : item.community.price_min
              : 0
          }
        />
      )}
      keyExtractor={(item) => item.property_id}
      ListHeaderComponent={children}
    />
  );
};
