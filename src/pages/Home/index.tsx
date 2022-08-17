import * as S from './styles';
import { FlatList } from 'react-native';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import pokeballHeader from '../../assets/img/pokeball.png';
import { Card, Pokemon, PokemonType } from '../../components/Card';

type Request = {
  id: number
  types: PokemonType[]
}

export function Home() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const navigation = useNavigation();

  function handleOpenAbout(pokemonId: number) {
    navigation.navigate("about", { pokemonId });
  }

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon')
      const { results } = response.data

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url)

          return {
            name: pokemon.name,
            id,
            types
          }
        })
      )
      setPokemons(payloadPokemons)
    }
    getAllPokemons()
  }, [])

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url)
    const { id, types } = response.data

    return { id, types }
  }

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader} />
            <S.Title>Pokédex</S.Title>
            <S.SubTitle>
              Procure Pokémon pelo nome ou usando o número National Pokédex.
            </S.SubTitle>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20
        }}
        data={pokemons}
        keyExtractor={pokemon => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <Card data={pokemon} onPress={() => handleOpenAbout(pokemon.id)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}