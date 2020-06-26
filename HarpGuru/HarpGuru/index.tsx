import 'react-native-gesture-handler'

import {PanGestureHandler, PanGestureHandlerGestureEvent, State} from 'react-native-gesture-handler'
import {StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'

import { themeSizes } from '../Styles'
import { HomeScreen } from '../Screens'
import {SweepingBanner, HUDContent} from '../HeadsupDisplay'
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
  const { harpKeyId, pozitionId, rootPitchId } = activeHarpStrata

  const screenProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode, setActiveDisplayMode }
  const hudContentProps = { harpKeyId, pozitionId, rootPitchId }

  const handleSwipe = ({nativeEvent}: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      console.log('iswipe handler')
    }
  }

  return (
    <PanGestureHandler
      activeOffsetX={swipeThreshold}
      onHandlerStateChange={handleSwipe}
    >
      <View style={styles.overlay}>
        <HomeScreen {...screenProps} />
        <SweepingBanner><HUDContent {...hudContentProps} /></SweepingBanner>
      </View>
    </PanGestureHandler>
  )
}
