import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type PokemonType = {
  type: string;
};

export const PokemonCardContainer = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    flex-direction: row;
    border-radius: 10px;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(30)}px;
    background-color: ${theme.Colors.BackgroundCard[type]};
  `}
`;

export const PokemonLeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(14)}px;
    color: ${theme.Colors.Text.number};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    margin-top: 5px;
    font-weight: bold;
    text-transform: capitalize;
    font-size: ${RFValue(25)}px;
    line-height: ${RFValue(31)}px;
    color: ${theme.Colors.Text.white};
  `}
`;

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: ${RFValue(74)}px;
  height: ${RFValue(32)}px;
  left: ${RFValue(90)}px;
  top: ${RFValue(-10)}px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: ${RFValue(5)}px;
    width: ${RFValue(65)}px;
    height: ${RFValue(25)}px;
    border-radius: 3px;
    margin-top: ${RFValue(5)}px;
    margin-left: ${RFValue(5)}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.Colors.BackgroundType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-weight: 500;
    text-transform: capitalize;
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(14)}px;
    color: ${theme.Colors.Text.white};
  `}
`;

export const PokemonRightSide = styled.View`
  position: relative;
  align-items: center;
  width: ${RFValue(50)}%;
  justify-content: center;
`;

export const PokemonImage = styled.Image`
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;
  margin-top: ${RFValue(-40)}px;
`;

export const PokeballDetail = styled.Image`
  position: absolute;
  right: ${RFValue(-20)}px;
`;
