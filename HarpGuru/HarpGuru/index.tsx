import {StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { PozitionIds, getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'

import {HarpFace, DisplayModes} from '../HarpFace'
import type { HarpFaceProps } from '../HarpFace'
import { ControlPanel } from '../ControlPanel'
import type { ControlPanelProps } from '../ControlPanel'

const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()
const activeIds: ActiveIds = []

const harpStrataProps: HarpStrataProps = {
  apparatusId, pozitionId, keyPitchId: pitchId, activeIds
}
const initialHarpStrata: HarpStrata = getHarpStrata(harpStrataProps)
const { Degree: displayMode } = DisplayModes

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
  const [ activePozitionId, setActivePozitionId ] = useState(pozitionId)

  const getBaseHarpStrataProps = (): HarpStrataProps => {
    const { apparatus: { id: apparatusId }} = activeHarpStrata
    const pozitionId = activePozitionId
    const keyPitchId = pitchId

    return { apparatusId, pozitionId, keyPitchId, activeIds }
  }

  const setPozitionId = (pozitionId: PozitionIds): void => {
    const harpStrataProps: HarpStrataProps = { ...getBaseHarpStrataProps(), pozitionId }
    setActivePozitionId(pozitionId)
    setHarpStrata(getHarpStrata(harpStrataProps))
  }

  const controlPanelProps: ControlPanelProps = { setPozitionId }
  const harpFaceProps: HarpFaceProps = { harpStrata: activeHarpStrata, displayMode }

  return (
    <View style={styles.guru}>
      <HarpFace {...harpFaceProps} />
      <ControlPanel {...controlPanelProps} />
    </View>
  )
}
