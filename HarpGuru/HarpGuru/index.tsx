import {StyleSheet, View} from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata, HarpStrataProps } from 'harpstrata'

import {HarpFace, DisplayModes} from '../HarpFace'
import type { HarpFaceProps } from '../HarpFace'
import { ControlPanel } from '../ControlPanel'

const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()
const harpStrataProps: HarpStrataProps = {
  apparatusId, pozitionId, keyPitchId: pitchId, activeIds: []
}
const initialHarpStrata: HarpStrata = getHarpStrata(harpStrataProps)
const { Degree: displayMode } = DisplayModes
const harpFaceProps: HarpFaceProps = { harpStrata: initialHarpStrata, displayMode }

const styles = StyleSheet.create({
  guru: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})

export const HarpGuru = (): ReactElement => (
  <View style={styles.guru}>
    <HarpFace {...harpFaceProps} />
    <ControlPanel />
  </View>
)
