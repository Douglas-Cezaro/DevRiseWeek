import React, { useEffect, useState } from "react";
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from "./styles";
import { Title, IconButton, Input, HousesList } from "../../components";
import { getHousesCall } from "../../services/call";
import Loading from "../../components/atoms/Loading";

export const HomeScreen = () => {
  const [housesListData, setHousesListData] = useState();
  const [loading, setLoading] = useState(false);

  const callGetHouses = async () => {
    setLoading(true);
    const result = await getHousesCall();
    setHousesListData(result.properties ? result.properties : []);
    setLoading(false);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScreenContainer>
      <HousesList data={housesListData}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
