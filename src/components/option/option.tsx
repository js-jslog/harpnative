import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { usePrevious } from '../../helpers'
import { themeSizes } from '../../Theme'

import { styles, getDynamicStyles } from './option-styles'

const { 8: swipeThreshold } = themeSizes


type OptionProps = {
  readonly title: string
  readonly optionId: string
  readonly nudgeFunction: (arg0: 'UP' | 'DOWN') => void
}

export const OptionContainer = (props: OptionProps): React.ReactElement => {
  const [state, setState] = useState(State.UNDETERMINED)
  const [translationY, setTranslationY] = useState(0)
  const previousState = usePrevious(state, State.UNDETERMINED)

  const { title, optionId, nudgeFunction } = props

  const dynamicStyles = getDynamicStyles(state)

  if (state === State.END && previousState === State.ACTIVE) {
    if (translationY > 0) {
      nudgeFunction('UP')
    } else {
      nudgeFunction('DOWN')
    }
  }

  const handlePozitionSwipe = ({
    nativeEvent,
  }: PanGestureHandlerGestureEvent) => {
    setState(nativeEvent.state)
    setTranslationY(nativeEvent.translationY)
  }

  return (
    <PanGestureHandler
      shouldCancelWhenOutside={true}
      activeOffsetY={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handlePozitionSwipe}
    >
      <View style={[styles.optionContainer, dynamicStyles.activeSwipeStyle]}>
        <OptionTitle>{title}</OptionTitle>
        <OptionValue>{optionId}</OptionValue>
      </View>
    </PanGestureHandler>
  )
}

type ChildProps = {
  readonly children: React.ReactNode
}

const OptionTitle = ({ children }: ChildProps): React.ReactElement => {
  return <Text style={styles.title}>{children}</Text>
}
const OptionValue = ({ children }: ChildProps): React.ReactElement => {
  return <Text style={styles.option}>{children}</Text>
}
