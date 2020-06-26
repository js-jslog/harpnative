import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import {HUDContentProps} from '../types'
import { themeSizes, themeColors } from '../../../Styles'

const { 7: variableSize, 8: titleSize } = themeSizes
const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    backgroundColor: themeColors.inertOutline,
    opacity: 0.5,
  },
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

type ChildProps = {
  readonly children: React.ReactNode
}

const Title = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.title}>{children}</Text>
}
const Variable = ({children}: ChildProps): React.ReactElement => {
  return <Text style={styles.variable}>{children}</Text>
}

export const HUDContent = (props: HUDContentProps): React.ReactElement => {
  const { harpKeyId, pozitionId, rootPitchId } = props

  return (
    <View style={styles.wrapper}>
      <View style={styles.column}>
        <Title>Harp Key</Title>
        <Variable>{harpKeyId}</Variable>
      </View>
      <View style={styles.column}>
        <Title>Position</Title>
        <Variable>{pozitionId}</Variable>
      </View>
      <View style={styles.column}>
        <Title>Pozition Key</Title>
        <Variable>{rootPitchId}</Variable>
      </View>
    </View>
  )
}
