import 'react-native-gesture-handler'

import type { State as GlobalState } from 'reactn/default'
import { addReducer } from 'reactn'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { getHarpStrata } from 'harpstrata'

import { DisplayModes } from '../types'
import { styles } from '../styles'
import {
  getPropsForHarpStrata,
  getNextQuizQuestion,
  setGlobalReactNState,
  activateHarpCell,
} from '../helpers'
import { themeSizes } from '../Theme'
import {
  HomeScreen,
  CovariantMenuScreen,
  LayoutMenuScreen,
  QuizQuestionScreen,
} from '../Screens'

import { useSwipeMenus, MenuStates } from './useSwipeMenus'
import { useQuizCycle } from './useQuizCycle'

setGlobalReactNState()

addReducer('requestNextQuestion', (global: GlobalState) => {
  const { activeHarpStrata, quizQuestion, activeDisplayMode } = global
  const nextQuizQuestion = getNextQuizQuestion(quizQuestion, activeDisplayMode)
  const harpStrataProps = getPropsForHarpStrata(
    activeHarpStrata,
    DisplayModes.Degree
  )
  const resetActiveHarpStrata = getHarpStrata({
    ...harpStrataProps,
    activeIds: [],
  })
  return {
    activeHarpStrata: resetActiveHarpStrata,
    quizQuestion: nextQuizQuestion,
  }
})

addReducer('revealAnswer', (global: GlobalState) => {
  const { activeHarpStrata, quizQuestion } = global
  const props = {
    harpStrata: activeHarpStrata,
    cellId: quizQuestion,
  }
  return {
    activeHarpStrata: activateHarpCell(props),
  }
})

const { 8: swipeThreshold } = themeSizes

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
        <CovariantMenuScreen
          onScreen={menuState === MenuStates.CovariantMenu}
        />
        <LayoutMenuScreen onScreen={menuState === MenuStates.LayoutMenu} />
        <QuizQuestionScreen screenFree={menuState === MenuStates.NoMenu} />
      </View>
    </PanGestureHandler>
  )
}
