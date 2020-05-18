import 'react-native-gesture-handler'

import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { HomeScreen, PozitionControlScreen } from '../Screens'
import {DisplayModes} from '../HarpFace'

const [ initialApparatusId ] = getApparatusIds()
const [ initialPozitionId ] = getPozitionIds()
const [ initialPitchId ] = getPitchIds()
const initialActiveIds: ActiveIds = []

const initialHarpStrataProps: HarpStrataProps = {
  apparatusId: initialApparatusId,
  pozitionId: initialPozitionId,
  harpKeyId: initialPitchId,
  activeIds: initialActiveIds,
}
const initialHarpStrata: HarpStrata = getHarpStrata(initialHarpStrataProps)
const { Degree: initialDisplayMode } = DisplayModes

const Stack = createStackNavigator()

export const HarpGuru = (): ReactElement => {
  const [ activeHarpStrata, setActiveHarpStrata ] = useState(initialHarpStrata)
  const [ activeDisplayMode, setDisplayMode ] = useState(initialDisplayMode)

  const screenProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setDisplayMode }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HarpGuruHome'>
          {(): ReactElement => <HomeScreen {...screenProps} />}
        </Stack.Screen>
        <Stack.Screen name='PozitionControlPanel'>
          {(): ReactElement => <PozitionControlScreen {...screenProps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
