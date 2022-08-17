import * as S from './styles';
import dotsImg from '../../assets/img/dots.png'
import { FadeAnimation } from '../FadeAnimation';
import { TouchableOpacityProps } from 'react-native';
import pokeballCard from '../../assets/img/pokeballCard.png'

export type PokemonType = {
  type: {
    name: string,
  }
}

export type Pokemon = {
  id: number,
  name: string,
  url: string,
  types: PokemonType[]
}

type Props = {
  data: Pokemon
} & TouchableOpacityProps

export function Card({ data, ...rest }: Props) {
  return (
    <S.PokemonCardContainer
      activeOpacity={0.7}
      type={data.types[0].type.name}
      {...rest}
    >
      <S.PokemonLeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImg} />

        <S.PokemonContentType>
          {data.types.map(pokemonType =>
            <S.PokemonType
              type={pokemonType.type.name}
              key={pokemonType.type.name}
            >
              <S.PokemonTypeText >
                {pokemonType.type.name}
              </S.PokemonTypeText>
            </S.PokemonType>
          )}
        </S.PokemonContentType>
      </S.PokemonLeftSide>

      <S.PokemonRightSide>
        <S.PokeballDetail source={pokeballCard} />
        <FadeAnimation>
          <S.PokemonImage
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            }}
          />
        </FadeAnimation>
      </S.PokemonRightSide>
    </S.PokemonCardContainer>
  );
}