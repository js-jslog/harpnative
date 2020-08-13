import { useGlobal } from 'reactn'
import { useTimingTransition } from 'react-native-redash'
import Animated, {
  Easing,
  interpolate,
  cond,
  greaterThan,
} from 'react-native-reanimated'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'

import { colors } from '../../styles'
import { sizes } from '../../styles'

import { useFlashDisplay } from './utils'

const styles = StyleSheet.create({
  animated: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    backgroundColor: colors.pageColor,
  },
  mainContents: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  question: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: sizes['10'],
  },
})

type QuizQuestionDisplayProps = {
  readonly screenFree: boolean
}

export const QuizQuestionDisplay = ({
  screenFree,
}: QuizQuestionDisplayProps): React.ReactElement => {
  const [quizQuestion] = useGlobal('quizQuestion')
  const shouldDisplay = useFlashDisplay(screenFree)

  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
  const guaranteeOffScreenWidth =
    windowWidth > windowHeight ? windowWidth : windowHeight

  const displayVal = useTimingTransition(shouldDisplay, {
    duration: 200,
    easing: Easing.inOut(Easing.ease),
  })

  const displayOpacity = interpolate(displayVal, {
    inputRange: [0, 1],
    outputRange: [0, 0.7],
  })
  const translateX = cond(
    greaterThan(displayVal, 0),
    0,
    guaranteeOffScreenWidth
  )

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          transform: [{ translateX: translateX }],
          opacity: displayOpacity,
        },
      ]}
    >
      <View style={styles.overlay}>
        <View style={styles.mainContents}>
          <View style={styles.question}>
            <Text style={styles.text}>{quizQuestion}</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  )
}
