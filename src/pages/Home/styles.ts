import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.Colors.Background.white};
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    margin-left: -20px;
    width: ${windowWidth}px;
    height: ${RFValue(220)}px;
    background-color: ${theme.Colors.Background.white};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(38)}px;
    color: ${theme.Colors.Text.black};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(10)}px;
    line-height: ${RFValue(19)}px;
    color: ${theme.Colors.Text.grey};
  `}
`;
