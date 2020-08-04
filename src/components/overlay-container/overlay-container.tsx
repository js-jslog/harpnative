import { Text, View, StyleSheet } from 'react-native'
import React, { ReactNode, ReactElement } from 'react'

import { colors } from '../../styles'

export const styles = StyleSheet.create({
  containerContainer: {
    ...StyleSheet.absoluteFillObject,
    right: -50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.inertOutline,
  },
  menuContainer: {
    ...StyleSheet.absoluteFillObject,
    right: 50,
    flexDirection: 'row',
  },
  textThing: {
    overflow: 'visible',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    transform: [{rotate: '-90deg'}],
  },
  innerThing: {
    alignItems: 'center',
    width: 500,
  },
  textInner: {
    fontSize: 20,
  }
})

export const OverlayContainer = ({
  children,
}: {
  readonly children: ReactNode
}): ReactElement => {
  return (
    <View style={styles.containerContainer}>
      <View style={styles.menuContainer}>{children}</View>
      <View style={styles.textThing}>
        <View style={styles.innerThing}>
          <Text style={styles.textInner}>Tuning Menu</Text>
        </View>
      </View>
    </View>
  )
}
