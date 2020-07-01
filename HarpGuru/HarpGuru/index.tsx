import 'react-native-gesture-handler'

import {PanGestureHandler, PanGestureHandlerGestureEvent, State} from 'react-native-gesture-handler'
import {StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'

import { themeSizes } from '../Styles'
import { HomeScreen } from '../Screens'
import {OverlayMenuContainer, CovariantMenu} from '../HeadsupDisplay'
import {DisplayModes} from '../HarpFace'

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  }
})

const { 8: swipeThreshold } = themeSizes

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


export const HarpGuru = (): ReactElement => {
  const [ activeHarpStrata, setActiveHarpStrata ] = useState(initialHarpStrata)
  const [ activeDisplayMode, setActiveDisplayMode ] = useState(initialDisplayMode)

  const screenProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode }
  const covariantMenuProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }

  const [ overlayVisible, setBannerActive ] = useState(false)
  

  const handleSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      if (nativeEvent.numberOfPointers === 1) {
        setBannerActive(!overlayVisible)
      } else {
        setActiveDisplayMode(activeDisplayMode === DisplayModes.Pitch ? DisplayModes.Degree : DisplayModes.Pitch )
      }
    }
  }

  return (
    <PanGestureHandler
      activeOffsetX={swipeThreshold}
      onHandlerStateChange={handleSwipe}
    >
      <View style={styles.overlay}>
        <HomeScreen {...screenProps} />
        <OverlayMenuContainer overlayVisible={overlayVisible}><CovariantMenu {...covariantMenuProps} /></OverlayMenuContainer>
      </View>
    </PanGestureHandler>
  )
}
