import 'react-native-gesture-handler'

import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

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

const Drawer = createDrawerNavigator()

export const HarpGuru = (): ReactElement => {
  const [ activeHarpStrata, setActiveHarpStrata ] = useState(initialHarpStrata)
  const [ activeDisplayMode, setDisplayMode ] = useState(initialDisplayMode)

  const screenProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setDisplayMode }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition='left'
        drawerContent={(): ReactElement => <PozitionControlScreen {...screenProps} />}
        drawerType='slide'
      >
        <Drawer.Screen name='HomeScreen'>
          {(): ReactElement => <HomeScreen {...screenProps} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
