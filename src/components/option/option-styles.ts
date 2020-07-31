import { State } from 'react-native-gesture-handler'
import { StyleSheet, ViewStyle } from 'react-native'

import { themeSizes, themeColors } from '../../Theme'

const { 7: variableSize, 8: titleSize } = themeSizes

export const styles = StyleSheet.create({
  optionContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: titleSize,
  },
  option: {
    fontSize: variableSize,
  },
})

export const getDynamicStyles = (
  state: State
): { readonly activeSwipeStyle: ViewStyle } => {
  return StyleSheet.create({
    activeSwipeStyle: {
      backgroundColor:
        state === State.ACTIVE ? themeColors.inertOutline : 'transparent',
    },
  })
}