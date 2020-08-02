import 'react-native-gesture-handler'

import { PanGestureHandler } from 'react-native-gesture-handler'
import { View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import { QuizQuestionDisplay } from '../quiz-question-display'
import { LayoutMenu } from '../layout-menu'
import { CovariantMenu } from '../covariant-menu'
import { setGlobalState, setGlobalReducers } from '../../utils'
import { MenuStates } from '../../types'
import { sizes } from '../../styles'
import { HomeScreen } from '../../Screens'

import { useSwipeMenus, useQuizCycle } from './hooks'
import { styles } from './harp-guru-styles'

setGlobalState()
setGlobalReducers()

const { 8: swipeThreshold } = sizes

export const HarpGuru = (): ReactElement => {
  const [menuState, handleSwipe] = useSwipeMenus()

  useQuizCycle(menuState)

  return (
    <PanGestureHandler
      activeOffsetX={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handleSwipe}
    >
      <View style={styles.overlay}>
        <HomeScreen />
        <CovariantMenu onScreen={menuState === MenuStates.CovariantMenu} />
        <LayoutMenu onScreen={menuState === MenuStates.LayoutMenu} />
        <QuizQuestionDisplay screenFree={menuState === MenuStates.NoMenu} />
      </View>
    </PanGestureHandler>
  )
}
