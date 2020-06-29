import { StyleSheet } from 'react-native'

import { themeSizes } from '../../../Styles'

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
