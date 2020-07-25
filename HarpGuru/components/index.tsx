import 'react-native-gesture-handler'

import type { State as GlobalState } from 'reactn/default'
import { addReducer, useDispatch, useGlobal } from 'reactn'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import { View } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { getHarpStrata } from 'harpstrata'

import { DisplayModes } from '../types'
import { styles } from '../styles'
import { ExperienceModes } from '../helpers/setGlobalReactNState'
import {
  getPropsForHarpStrata,
  getNextQuizQuestion,
  setGlobalReactNState,
  activateHarpCell,
  usePrevious,
} from '../helpers'
import { themeSizes } from '../Theme'
import {
  HomeScreen,
  CovariantMenuScreen,
  LayoutMenuScreen,
  QuizQuestionScreen,
} from '../Screens'

import { useSwipeMenus, MenuStates } from './useSwipeMenus'

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
  const [menuState, setGestureStates] = useSwipeMenus()
  const previousMenuState = usePrevious(menuState, menuState)

  const [activeExperienceMode] = useGlobal('activeExperienceMode')
  const requestNextQuestion = useDispatch('requestNextQuestion')

  const covariantMenuScreenProps = {
    onScreen: menuState === MenuStates.CovariantMenu,
  }
  const layoutMenuScreenProps = {
    onScreen: menuState === MenuStates.LayoutMenu,
  }
  const quizQuestionScreenProps = {
    screenFree: menuState === MenuStates.NoMenu,
  }

  const handleSwipe = ({ nativeEvent }: PanGestureHandlerGestureEvent) => {
    setGestureStates(nativeEvent.state, nativeEvent.translationX)
  }

  if (
    menuState === MenuStates.NoMenu &&
    previousMenuState !== MenuStates.NoMenu &&
    activeExperienceMode === ExperienceModes.Quiz
  )
    requestNextQuestion()

  return (
    <PanGestureHandler
      activeOffsetX={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handleSwipe}
    >
      <View style={styles.overlay}>
        <HomeScreen />
        <CovariantMenuScreen {...covariantMenuScreenProps} />
        <LayoutMenuScreen {...layoutMenuScreenProps} />
        <QuizQuestionScreen {...quizQuestionScreenProps} />
      </View>
    </PanGestureHandler>
  )
}
