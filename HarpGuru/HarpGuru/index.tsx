import {StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { PozitionIds, getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'

import {HarpFace, DisplayModes} from '../HarpFace'
import type { HarpFaceProps } from '../HarpFace'
import { ControlPanel } from '../Controls'
import type { ControlPanelProps } from '../Controls'

const [ initialApparatusId ] = getApparatusIds()
const [ initialPozitionId ] = getPozitionIds()
const [ initialPitchId ] = getPitchIds()
const initialActiveIds: ActiveIds = []

const initialHarpStrataProps: HarpStrataProps = {
  apparatusId: initialApparatusId,
  pozitionId: initialPozitionId,
  keyPitchId: initialPitchId,
  activeIds: initialActiveIds,
}
const initialHarpStrata: HarpStrata = getHarpStrata(initialHarpStrataProps)
const { Degree: initialDisplayMode } = DisplayModes

const styles = StyleSheet.create({
  guru: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})

export const HarpGuru = (): ReactElement => {
  const [ activeHarpStrata, setHarpStrata ] = useState(initialHarpStrata)
  const [ activePozitionId, setActivePozitionId ] = useState(initialPozitionId)
  const [ activeDisplayMode, setDisplayMode ] = useState(initialDisplayMode)

  const getBaseHarpStrataProps = (): HarpStrataProps => {
    const { apparatus: { id: apparatusId }} = activeHarpStrata
    const pozitionId = activePozitionId
    const keyPitchId = initialPitchId
    const activeIds = initialActiveIds

    return { apparatusId, pozitionId, keyPitchId, activeIds }
  }

  const setPozitionId = (pozitionId: PozitionIds): void => {
    const harpStrataProps: HarpStrataProps = { ...getBaseHarpStrataProps(), pozitionId }
    setActivePozitionId(pozitionId)
    setHarpStrata(getHarpStrata(harpStrataProps))
  }

  const controlPanelProps: ControlPanelProps = { setPozitionId, setDisplayMode }
  const harpFaceProps: HarpFaceProps = { harpStrata: activeHarpStrata, displayMode: activeDisplayMode }

  return (
    <View style={styles.guru}>
      <HarpFace {...harpFaceProps} />
      <ControlPanel {...controlPanelProps} />
    </View>
  )
}
