import React from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata, HarpStrataProps } from 'harpstrata'

import {HarpFace, DisplayModes} from '../HarpFace'
import type { HarpFaceProps } from '../HarpFace'

const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()
const harpStrataProps: HarpStrataProps = {
  apparatusId, pozitionId, keyPitchId: pitchId, activeIds: []
}
const initialHarpStrata: HarpStrata = getHarpStrata(harpStrataProps)
const { Degree: displayMode } = DisplayModes
const harpFaceProps: HarpFaceProps = { harpStrata: initialHarpStrata, displayMode }

export const HarpGuru = (): ReactElement => {
  return <HarpFace {...harpFaceProps} />
}
