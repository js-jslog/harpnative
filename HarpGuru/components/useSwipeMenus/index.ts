import { useEffect } from 'reactn'
import { State } from 'react-native-gesture-handler'
import { useState } from 'react'

import { usePrevious } from '../../helpers'

export enum MenuStates {
  LayoutMenu,
  CovariantMenu,
  NoMenu,
}

type SetGestureStates = (arg0: State, arg1: number) => void

export const useSwipeMenus = (): [MenuStates, SetGestureStates] => {
  const [panState, setPanState] = useState<State>(State.UNDETERMINED)
  const [menuState, setMenuState] = useState<MenuStates>(MenuStates.NoMenu)
  const [translationX, setTranslationX] = useState<number>(0)
  const previousPanState = usePrevious(panState, State.UNDETERMINED)

  useEffect(() => {
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
  }, [panState])

  const setGestureStates = (panState: State, translationX: number): void => {
    setPanState(panState)
    setTranslationX(translationX)
  }
  return [menuState, setGestureStates]
}
