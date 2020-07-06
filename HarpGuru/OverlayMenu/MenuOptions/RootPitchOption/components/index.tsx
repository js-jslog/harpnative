import React from 'react'
import {HarpStrata} from 'harpstrata'

import type { RootPitchOptionProps } from '../types'
import { nudgeHarpStrataByRootPitch } from '../nudgeHarpStrataByRootPitch'
import { OptionContainer } from '../../OptionContainer'
import type { DisplayModes } from '../../../../HarpFace'


type FullNudgeFunction = (arg0: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => void
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => void

const partiallyApplyCovariantNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, setActiveHarpStrata: (arg0: HarpStrata) => void, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    nudgeFunction(activeHarpStrata, setActiveHarpStrata, direction, activeDisplayMode)
  }
}

export const RootPitchOption = (props: RootPitchOptionProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { rootPitchId } = activeHarpStrata

  const rootPitchOptionContainerProps = {
    title: 'Position Key',
    optionId: rootPitchId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByRootPitch, activeHarpStrata, setActiveHarpStrata, activeDisplayMode),
  }

  return <OptionContainer {...rootPitchOptionContainerProps}/>
}
