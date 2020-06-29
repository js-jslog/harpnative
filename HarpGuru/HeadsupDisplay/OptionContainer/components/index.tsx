import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler'
import { View, StyleSheet } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'

import type { OptionContainerProps } from '../types'
import { styles } from '../styles'
import { themeSizes, themeColors } from '../../../Styles'

import { Title, Variable } from './OptionContents'

const { 8: swipeThreshold } = themeSizes

const usePrevious = (value: State) => {
  const ref = useRef(State.UNDETERMINED)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const OptionContainer = (props: OptionContainerProps): React.ReactElement => {
  const [ state, setState ] = useState(State.UNDETERMINED)
  const [ translationY, setTranslationY ] = useState(0)
  const previousState = usePrevious(state)

  const { title, optionId, setActiveHarpStrata, nudgeFunction } = props

  const dynamicStyles = StyleSheet.create({
    activeSwipeStyle: {
      backgroundColor: (state === State.ACTIVE ? themeColors.inertOutline : 'transparent')
    }
  })

  if (state === State.END && previousState === State.ACTIVE) {
    if (translationY > 0) {
      setActiveHarpStrata(nudgeFunction('UP'))
    } else {
      setActiveHarpStrata(nudgeFunction('DOWN'))
    }
  }

  const handlePozitionSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    setState(nativeEvent.state)
    setTranslationY(nativeEvent.translationY)
  }

  return (
    <PanGestureHandler
      shouldCancelWhenOutside={true}
      activeOffsetY={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handlePozitionSwipe}
    >
      <View style={[styles.column, dynamicStyles.activeSwipeStyle]}>
        <Title>{title}</Title>
        <Variable>{optionId}</Variable>
      </View>
    </PanGestureHandler>
  )
}
