import * as S from './styles'
import { ReactNode, useEffect } from "react"
import { useWindowDimensions, ViewProps } from "react-native"
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

type FadeAnimationProps = {
  children: ReactNode
} & ViewProps

export function FadeAnimation({ children, ...rest }: FadeAnimationProps) {
  const { width: displayWidth } = useWindowDimensions()
  const cardOpacity = useSharedValue(0)
  const cardOffset = useSharedValue(0.25 * displayWidth)

  const animatedStyles = useAnimatedStyle(() => {
    'worklet'
    return {
      opacity: cardOpacity.value,
      transform: [{
        translateX: cardOffset.value,
      }]
    }
  })

  useEffect(() => {
    cardOpacity.value = withTiming(1, { duration: 1000 })
    cardOffset.value = withTiming(0, { duration: 1000 })
  }, [])

  return (
    <S.AnimationContainer {...rest} style={animatedStyles}>
      {children}
    </S.AnimationContainer>
  )
}