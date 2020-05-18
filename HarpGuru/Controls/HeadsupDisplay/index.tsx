import {View, Text} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import type { HarpStrata } from 'harpstrata'

export const HeadsupDisplay = (activeHarpStrata: HarpStrata): ReactElement => {
  const { apparatus: { id: apparatusId }} = activeHarpStrata
  const { isActiveComplex: { activeDegreeIds, activePitchIds }} = activeHarpStrata
  const { pozitionId, harpKeyId, rootPitchId } = activeHarpStrata

  return (
    <>
      <View
        accessible={true}
        accessibilityLabel='Active Pitches'
      >
        <Text>Pitches</Text>
        <Text>{activePitchIds}</Text>
      </View>
      <View
        accessible={true}
        accessibilityLabel='Active Degrees'
      >
        <Text>Degrees</Text>
        <Text>{activeDegreeIds}</Text>
      </View>
      <View
        accessible={true}
        accessibilityLabel='Active Pozition'
      >
        <Text>Pozition</Text>
        <Text>{pozitionId}</Text>
      </View>
      <View
        accessible={true}
        accessibilityLabel='Active Harp Key'
      >
        <Text>Harp Key</Text>
        <Text>{harpKeyId}</Text>
      </View>
      <View
        accessible={true}
        accessibilityLabel='Active Root Pitch'
      >
        <Text>Root Pitch</Text>
        <Text>{rootPitchId}</Text>
      </View>
      <View
        accessible={true}
        accessibilityLabel='Active Apparatus'
      >
        <Text>Apparatus</Text>
        <Text>{apparatusId}</Text>
      </View>
    </>
  )
}
