import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler'
import { Text, StyleSheet, View } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import { HarpStrata } from 'harpstrata'

import { themeSizes, themeColors } from '../../../Styles'

const { 7: variableSize, 8: titleSize } = themeSizes
const { 8: swipeThreshold } = themeSizes

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: titleSize
  },
  variable: {
    fontSize: variableSize
  }
})

const usePrevious = (value: State) => {
  const ref = useRef(State.UNDETERMINED)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

type ChildProps = {
  readonly children: React.ReactNode
}

type OptionContainerProps = {
  readonly title: string
  readonly optionId: string
  readonly nudgeFunction: (arg0: 'UP' | 'DOWN') => HarpStrata
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
}

const Title = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.title}>{children}</Text>
}
const Variable = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.variable}>{children}</Text>
}

export const OptionContainer = (props: OptionContainerProps): React.ReactElement => {
  const [ state, setState ] = useState(State.UNDETERMINED)
  const [ translationY, setTranslationY ] = useState(0)
  const previousState = usePrevious(state)

  const { title, optionId, setActiveHarpStrata, nudgeFunction } = props

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
      <View style={[styles.column, { ...{ backgroundColor: (state === State.ACTIVE ? themeColors.inertOutline : 'transparent')}}]}>
        <Title>{title}</Title>
        <Variable>{optionId}</Variable>
      </View>
    </PanGestureHandler>
  )
}
