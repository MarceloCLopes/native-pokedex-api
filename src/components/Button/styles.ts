import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${RFValue(100)}%;
    height: ${RFValue(50)}px;
    background-color: ${theme.Colors.BackgroundType.water};

    border-radius: 20px;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${RFValue(16)}px;
    color: ${theme.Colors.Text.white};
  `}
`;
