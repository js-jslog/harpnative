import {StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { ActiveIds, HarpStrata, HarpStrataProps } from 'harpstrata'

import { HarpGuruHome } from '../HarpGuruHome'
import {DisplayModes} from '../HarpFace'
import type { HarpFaceProps } from '../HarpFace'
import { PozitionControlPanel } from '../Controls'

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
  const harpGuruHomeProps = {...harpFaceProps, setDisplayMode}
  const harpStrataControlProps = { activeHarpStrata, setActiveHarpStrata }

  return (
    <View style={styles.guru}>
      <HarpGuruHome {...harpGuruHomeProps} />
      <PozitionControlPanel {...harpStrataControlProps} />
    </View>
  )
}
