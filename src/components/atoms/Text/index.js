import styled from "styled-components/native";

// Title
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: white;
  font-weight: bold;
`;

// Details texts

export const DetailTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: white;
  font-weight: bold;
`;

export const DetailSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: white;
`;

export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: white;
`;

export const DetailSectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: white;
  font-weight: bold;
`;

// Cards Texts

export const CardTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: white;
  font-weight: bold;
`;

export const CardDescription = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: white;
`;

export const CardHighLitghtText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
  font-weight: 600;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: white;
  font-weight: bold;
`;
