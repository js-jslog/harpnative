import {State} from 'react-native-gesture-handler'
import { StyleSheet, ViewStyle } from 'react-native'

import { themeSizes, themeColors } from '../../../Styles'

const { 7: variableSize, 8: titleSize } = themeSizes

export const styles = StyleSheet.create({
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

type DynamicStyleType = {
  readonly activeSwipeStyle: ViewStyle
}

export const getDynamicStyles = (state: State): DynamicStyleType => {
  return StyleSheet.create({
    activeSwipeStyle: {
      backgroundColor: (state === State.ACTIVE ? themeColors.inertOutline : 'transparent')
    }
  })
}
