import { View, Text } from 'react-native'
import React from 'react'
import { DegreeIds } from 'harpstrata'

export const ActivityLegend = (): React.ReactElement => {
  return (
    <View>
      <Text>{DegreeIds.Root}</Text>
      <Text>{DegreeIds.Flat2}</Text>
      <Text>{DegreeIds.Second}</Text>
      <Text>{DegreeIds.Flat3}</Text>
      <Text>{DegreeIds.Third}</Text>
      <Text>{DegreeIds.Fourth}</Text>
      <Text>{DegreeIds.Flat5}</Text>
      <Text>{DegreeIds.Fifth}</Text>
      <Text>{DegreeIds.Flat6}</Text>
      <Text>{DegreeIds.Sixth}</Text>
      <Text>{DegreeIds.Flat7}</Text>
      <Text>{DegreeIds.Seventh}</Text>
    </View>
  )
}
