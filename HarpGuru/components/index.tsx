import 'react-native-gesture-handler'

import type { State as GlobalState, Dispatch } from 'reactn/default'
import { addReducer, useDispatch } from 'reactn'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler'
import { View } from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getHarpStrata } from 'harpstrata'

import { DisplayModes } from '../types'
import { styles } from '../styles'
import {
  usePrevious,
  getPropsForHarpStrata,
  getNextQuizQuestion,
} from '../helpers'
import { themeSizes } from '../Theme'
import {
  HomeScreen,
  CovariantMenuScreen,
  LayoutMenuScreen,
  QuizQuestionScreen,
} from '../Screens'

addReducer('quizAnswerGiven', (_global: GlobalState, dispatch: Dispatch) => {
  setTimeout(dispatch.requestNextQuestion, 1000)
})
addReducer('requestNextQuestion', (global: GlobalState) => {
  const { activeHarpStrata, quizQuestion } = global
  const nextQuizQuestion = getNextQuizQuestion(quizQuestion)
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

const { 8: swipeThreshold } = themeSizes

const { Degree: initialDisplayMode } = DisplayModes

enum MenuStates {
  LayoutMenu,
  CovariantMenu,
  NoMenu,
}

export const HarpGuru = (): ReactElement => {
  const [activeDisplayMode, setActiveDisplayMode] = useState(initialDisplayMode)
  const requestNextQuestion = useDispatch('requestNextQuestion')

  const [panState, setPanState] = useState<State>(State.UNDETERMINED)
  const [menuState, setMenuState] = useState<MenuStates>(MenuStates.NoMenu)
  const [translationX, setTranslationX] = useState<number>(0)
  const previousPanState = usePrevious(panState, State.UNDETERMINED)
  const previousMenuState = usePrevious(menuState, MenuStates.NoMenu)

  const homeScreenProps = {
    activeDisplayMode,
  }

  const covariantMenuScreenProps = {
    activeDisplayMode,
    setActiveDisplayMode,
    onScreen: menuState === MenuStates.CovariantMenu,
  }
  const layoutMenuScreenProps = {
    activeDisplayMode,
    setActiveDisplayMode,
    onScreen: menuState === MenuStates.LayoutMenu,
  }
  const quizQuestionScreenProps = {
    screenFree: menuState === MenuStates.NoMenu,
  }

  const handleSwipe = ({ nativeEvent }: PanGestureHandlerGestureEvent) => {
    setPanState(nativeEvent.state)
    setTranslationX(nativeEvent.translationX)
  }

  if (panState === State.END && previousPanState === State.ACTIVE) {
    if (menuState === MenuStates.NoMenu && translationX < 0) {
      setMenuState(MenuStates.LayoutMenu)
    } else if (menuState === MenuStates.NoMenu && translationX > 0) {
      setMenuState(MenuStates.CovariantMenu)
    } else if (menuState === MenuStates.CovariantMenu && translationX < 0) {
      setMenuState(MenuStates.NoMenu)
    } else if (menuState === MenuStates.LayoutMenu && translationX > 0) {
      setMenuState(MenuStates.NoMenu)
    }
    setPanState(State.UNDETERMINED)
    setTranslationX(0)
  }

  if (
    menuState === MenuStates.NoMenu &&
    previousMenuState !== MenuStates.NoMenu
  )
    requestNextQuestion()

  return (
    <PanGestureHandler
      activeOffsetX={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handleSwipe}
    >
      <View style={styles.overlay}>
        <HomeScreen {...homeScreenProps} />
        <CovariantMenuScreen {...covariantMenuScreenProps} />
        <LayoutMenuScreen {...layoutMenuScreenProps} />
        <QuizQuestionScreen {...quizQuestionScreenProps} />
      </View>
    </PanGestureHandler>
  )
}
