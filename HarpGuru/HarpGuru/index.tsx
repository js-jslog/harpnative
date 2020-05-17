import {StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { PitchIds, PozitionIds, getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'

import {HarpFace, DisplayModes} from '../HarpFace'
import type { HarpFaceProps } from '../HarpFace'
import { PozitionButton, PitchButton, DisplayModeToggler } from '../Controls'

const styles = StyleSheet.create({
  guru: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})

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
  const [ activeDisplayMode, setDisplayMode ] = useState(initialDisplayMode)

  const harpFaceProps: HarpFaceProps = { harpStrata: activeHarpStrata, displayMode: activeDisplayMode }

  const displayModeTogglerProps = { setDisplayMode }

  const firstPozitionButtonProps = { id: PozitionIds.First, activeHarpStrata, setActiveHarpStrata }
  const secondPozitionButtonProps = { id: PozitionIds.Second, activeHarpStrata, setActiveHarpStrata }

  const keyCHarpButtonProps = { id: PitchIds.C, activeHarpStrata, setActiveHarpStrata }
  const keyDHarpButtonProps = { id: PitchIds.D, activeHarpStrata, setActiveHarpStrata }

  return (
    <View style={styles.guru}>
      <HarpFace {...harpFaceProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
      <PozitionButton {...firstPozitionButtonProps} />
      <PozitionButton {...secondPozitionButtonProps} />
      <PitchButton {...keyCHarpButtonProps} />
      <PitchButton {...keyDHarpButtonProps} />
    </View>
  )
}
