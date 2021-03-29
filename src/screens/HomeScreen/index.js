import React, { useEffect, useState } from "react";
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from "./styles";
import {
  Title,
  IconButton,
  Input,
  HousesList,
  FilterModal,
} from "../../components";
import { getHousesCall } from "../../services/call";
import { useHousesHooks } from "../../services/hooks";
import Loading from "../../components/atoms/Loading";
import { useHousesStore } from "../../services/stores";

export const HomeScreen = () => {
  const { onGetHouses } = useHousesHooks();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const {
    housesList,
    loadingHousesList,
    offset,
    setOffset,
    finish,
  } = useHousesStore();

  renderFooter = () => {
    if (!loadingHousesList) return null;
    style = {
      alignSelf: "center",
      marginVertical: 20,
    };
    if (finish) {
      return (
        <TitleContainer>
          <Title>Fim da lista</Title>
        </TitleContainer>
      );
    }
    return <Loading width={100} height={100} style={style} />;
  };

  const toogleFilterModal = () => {
    setOffset(0);
    setFilterModalVisible(!filterModalVisible);
  };

  useEffect(() => {
    onGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        ListFooterComponent={renderFooter}
        onEndReached={onGetHouses}
      >
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" onPress={toogleFilterModal} />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
        </ContentContainer>
      </HousesList>
      {filterModalVisible && (
        <FilterModal onClose={toogleFilterModal} visible={filterModalVisible} />
      )}
    </ScreenContainer>
  );
};
