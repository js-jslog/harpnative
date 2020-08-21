import 'react-native-gesture-handler'

import { PanGestureHandler } from 'react-native-gesture-handler'
import type { TapGestureHandlerStateChangeEvent } from 'react-native-gesture-handler'
import { View, StyleSheet } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'

import { QuizQuestionDisplayMemo } from '../quiz-question-display'
import { LayoutMenuMemo } from '../layout-menu'
import { HarpFace } from '../harp-face'
import { CovariantMenuMemo } from '../covariant-menu'
import { setGlobalState, setGlobalReducers } from '../../utils'
import { MenuStates } from '../../types'
import { colors } from '../../styles'
import { getSizes } from '../../styles'

import { useMenus, useQuizCycle } from './hooks'

setGlobalState()
setGlobalReducers()

const styles = StyleSheet.create({
  fillScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.pageColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const HarpGuru = (): ReactElement => {
  const [menuState, handleSwipe, handleTap] = useMenus()
  const covariantTapHandler = (event: TapGestureHandlerStateChangeEvent) => {
    handleTap(MenuStates.CovariantMenu, event)
  }
  const layoutTapHandler = (event: TapGestureHandlerStateChangeEvent) => {
    handleTap(MenuStates.LayoutMenu, event)
  }

  const sizes = getSizes()
  const { 8: swipeThreshold } = sizes

  useQuizCycle(menuState)

  return (
    <PanGestureHandler
      activeOffsetX={[swipeThreshold * -1, swipeThreshold]}
      onHandlerStateChange={handleSwipe}
    >
      <View style={styles.fillScreen}>
        <HarpFace />
        <CovariantMenuMemo
          hideMenu={menuState !== MenuStates.CovariantMenu}
          hideLabel={
            menuState !== MenuStates.CovariantMenu &&
            menuState !== MenuStates.NoMenu
          }
          tapHandler={covariantTapHandler}
        />
        <LayoutMenuMemo
          hideMenu={menuState !== MenuStates.LayoutMenu}
          hideLabel={
            menuState !== MenuStates.LayoutMenu &&
            menuState !== MenuStates.NoMenu
          }
          tapHandler={layoutTapHandler}
        />
        <QuizQuestionDisplayMemo screenFree={menuState === MenuStates.NoMenu} />
      </View>
    </PanGestureHandler>
  )
}
