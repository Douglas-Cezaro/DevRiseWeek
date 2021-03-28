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
  const [housesListData, setHousesListData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const callGetHouses = async () => {
    setLoading(true);
    const result = await getHousesCall(page);

    setHousesListData([
      ...housesListData,
      ...(result.properties ? result.properties : []),
    ]);
    setPage(page + 10);
    setLoading(false);
  };

  renderFooter = () => {
    if (!loading) return null;
    style = {
      alignSelf: "center",
      marginVertical: 20,
    };
    return <Loading width={100} height={100} style={style} />;
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={housesListData}
        ListFooterComponent={renderFooter}
        onEndReached={callGetHouses}
      >
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
