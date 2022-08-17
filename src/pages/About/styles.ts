import { TypeName } from ".";
import * as Progress from "react-native-progress";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type TypeProps = {
  type: TypeName;
};

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    position: relative;
    align-items: center;
    flex-direction: row;
    height: ${RFValue(340)}px;
    padding: ${RFValue(20)}px;
    background-color: ${theme.Colors.BackgroundCard[type]};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(70)}px;
  left: ${RFValue(40)}px;
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const CircleImage = styled.Image`
  position: absolute;
  width: ${RFValue(125)}px;
  height: ${RFValue(125)}px;
`;

export const PokemonImage = styled.Image`
  width: ${RFValue(125)}px;
  height: ${RFValue(125)}px;
`;

export const Content = styled.View`
  margin-left: ${RFValue(30)}px;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-style: normal;
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(19)}px;
    color: ${theme.Colors.Text.number};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-style: normal;
    text-transform: capitalize;
    font-size: ${RFValue(28)}px;
    line-height: ${RFValue(38)}px;
    color: ${theme.Colors.Text.white};
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    width: ${RFValue(61)}px;
    height: ${RFValue(25)}px;
    padding: ${RFValue(3)}px;
    margin-top: ${RFValue(10)}px;
    margin-left: ${RFValue(5)}px;
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

export const DotsImage = styled.Image`
  position: absolute;
  top: ${RFValue(220)}px;
  width: ${RFValue(85)}px;
  right: ${RFValue(-20)}px;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(-40)}px;
    border-top-left-radius: ${RFValue(40)}px;
    border-top-right-radius: ${RFValue(40)}px;
    background-color: ${theme.Colors.Background.white};
  `}
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(19)}px;
    padding: ${RFValue(20)}px;
    color: ${theme.Colors.BackgroundType[type]};
  `}
`;

export const StatusBar = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  width: ${RFValue(100)}%;
`;

export const Attributes = styled.Text`
  ${({ theme }) => css`
    font-weight: 500;
    font-style: normal;
    width: ${RFValue(110)}px;
    text-transform: capitalize;
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(14)}px;
    color: ${theme.Colors.Text.grey};
  `}
`;

export const AttributesValue = styled.Text`
  ${({ theme }) => css`
    text-align: right;
    font-style: normal;
    font-weight: normal;
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(19)}px;
    margin-left: ${RFValue(20)}px;
    color: ${theme.Colors.Text.black};
  `}
`;

export const ContentBar = styled.View`
  margin-left: ${RFValue(20)}px;
`;

export const ProgressBar = styled(Progress.Bar)<TypeProps>``;

export const Ability = styled.Text`
  ${({ theme }) => css`
    padding: 5px 20px;
    font-style: normal;
    font-weight: normal;
    text-transform: capitalize;
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(14)}px;
    color: ${theme.Colors.Text.black};
  `}
`;
