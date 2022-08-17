import * as S from './styles';
import pokemonAnimation from './pokemon.json'
import { Button } from '../../components/Button';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

export function Welcome() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("home");
  }

  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView
              style={{
                width: RFValue(200)
              }}
              autoPlay
              source={pokemonAnimation}
              loop
            />
          </S.WrapperImage>
        </S.WrapperAnimation>
        <S.Title>Bem vindo!</S.Title>
        <S.SubTitle>Encontre todos os pokemons em um só lugar.</S.SubTitle>
      </S.Content>
      <S.Footer>
        <Button title='Iniciar' onPress={handleNavigation} />
      </S.Footer>
    </S.Container>
  );
}