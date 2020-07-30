import { View, StyleSheet } from 'react-native'
import React, { ReactNode, ReactElement } from 'react'

import { themeColors } from '../../Theme'

export const styles = StyleSheet.create({
  menuContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    backgroundColor: themeColors.inertOutline,
  },
})

export const MenuContainer = ({
  children,
}: {
  readonly children: ReactNode
}): ReactElement => {
  return <View style={styles.menuContainer}>{children}</View>
}
