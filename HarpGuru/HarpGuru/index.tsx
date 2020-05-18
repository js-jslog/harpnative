import 'react-native-gesture-handler'

import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { HarpGuruHome } from '../HarpGuruHome'
import {DisplayModes} from '../HarpFace'
import type { HarpFaceProps } from '../HarpFace'
import { PozitionControlPanel } from '../Controls'

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

  const harpFaceProps: HarpFaceProps = { harpStrata: activeHarpStrata, displayMode: activeDisplayMode }
  const harpGuruHomeProps = {...harpFaceProps, setDisplayMode}
  const harpStrataControlProps = { activeHarpStrata, setActiveHarpStrata }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HarpGuruHome'>
          {(): ReactElement => <HarpGuruHome {...harpGuruHomeProps} />}
        </Stack.Screen>
        <Stack.Screen name='PozitionControlPanel'>
          {(): ReactElement => <PozitionControlPanel {...harpStrataControlProps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
