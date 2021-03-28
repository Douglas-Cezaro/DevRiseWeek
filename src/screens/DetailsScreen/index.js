import React, { useEffect, useState } from "react";
import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeatureContainer,
} from "./styles";
import {
  IconButton,
  DetailTitle,
  DetailSubTitle,
  DetailSectionTitle,
  DetailText,
  HouseFeatureCard,
} from "../../components";
import { FormattedPrice } from "../../utils";
import { getHouseDetails } from "../../services/call";
import Loading from "../../components/atoms/Loading";

export const DetailsScreen = ({ route, navigation }) => {
  const { selectedHouse } = route.params;

  const [selectedStar, setSelectedStar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [houseDetails, setHouseDetails] = useState();

  const callGetHouseDetails = async () => {
    setLoading(true);
    const result = await getHouseDetails(selectedHouse.property_id);

    setHouseDetails(result.properties[0] ? result.properties[0] : null);
    setLoading(false);
  };

  const onClickArrowBack = () => {
    navigation.goBack();
  };

  const onClickSelectedStar = () => {
    setSelectedStar(!selectedStar);
  };

  useEffect(() => {
    callGetHouseDetails();
  }, []);
  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          iconName="chevron-back"
          transparent
          onPress={onClickArrowBack}
        />
        <IconButton
          iconName={selectedStar ? "star" : "star-outline"}
          transparent
          onPress={onClickSelectedStar}
        />
      </ImageBackground>
      {loading ? (
        ((style = {
          alignSelf: "center",
          marginVertical: 20,
        }),
        (
          <BottomScreenContainer>
            <Loading width={100} height={100} style={style} />
          </BottomScreenContainer>
        ))
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{houseDetails.address.line}</DetailTitle>
          <DetailSubTitle>
            {FormattedPrice(
              houseDetails.community.price_max
                ? houseDetails.community.price_max
                : houseDetails.community.price_min
            )}
          </DetailSubTitle>
          <DetailText>{`${
            houseDetails.address.neighborhood_name
              ? houseDetails.address.neighborhood_name
              : houseDetails.address.city
          } - ${houseDetails.address.state}`}</DetailText>
          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>
          <FeatureContainer>
            <HouseFeatureCard
              iconName="arrow-collapse-all"
              featureText={`${houseDetails.lot_size.size} ${houseDetails.lot_size.units}`}
              iconLib="materialcommunity"
            />
            <HouseFeatureCard
              iconName="bed-king-outline"
              featureText={`${houseDetails.community.beds_min} - ${houseDetails.community.beds_max} beds`}
              iconLib="materialcommunity"
            />
            <HouseFeatureCard
              iconName="bath"
              featureText={`${houseDetails.community.baths_min} - ${houseDetails.community.baths_max} baths`}
              iconLib="fontawesome"
            />
          </FeatureContainer>

          <DetailSectionTitle mt={24} mb={12}>
            Vantagens do imóvel
          </DetailSectionTitle>
          {houseDetails.features[1].text.map((item, key) => (
            <DetailText mb={2} key={key}>
              - {item}
            </DetailText>
          ))}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
