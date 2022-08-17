import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = {
  title: string
} & TouchableOpacityProps

export function Button({ title, ...rest }: Props) {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}