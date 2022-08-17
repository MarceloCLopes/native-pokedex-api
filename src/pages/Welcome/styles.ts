import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.Colors.BackgroundType.water};
  `}
`;

export const Content = styled.View`
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(200)}px;
    height: ${RFValue(300)}px;
    border-radius: ${RFValue(100)}px;
    background-color: ${theme.Colors.BackgroundType.water};

    align-items: center;
    justify-content: center;
    transform: rotate(30deg);
  `}
`;

export const WrapperImage = styled.View`
  transform: rotate(-30deg);
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    height: 30%;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.Colors.Background.white};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(40)}px;
    margin-top: ${RFValue(20)}px;
    color: ${theme.Colors.Text.white};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(20)}px;
    color: ${theme.Colors.Text.white};
  `}
`;
