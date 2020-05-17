import {View, Text} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import type { HarpStrata } from 'harpstrata'

export const HeadsupDisplay = (activeHarpStrata: HarpStrata): ReactElement => {
  const { apparatus: { id }} = activeHarpStrata
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}
