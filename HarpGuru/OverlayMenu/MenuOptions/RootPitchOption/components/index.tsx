import React from 'react'
import {HarpStrata} from 'harpstrata'

import type { RootPitchOptionProps } from '../types'
import { nudgeHarpStrataByRootPitch } from '../nudgeHarpStrataByRootPitch'
import { OptionContainer } from '../../OptionContainer'
import type { DisplayModes } from '../../../../HarpFace'


type FullNudgeFunction = (arg0: HarpStrata, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => HarpStrata
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => HarpStrata

const partiallyApplyCovariantNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    return nudgeFunction(activeHarpStrata, direction, activeDisplayMode)
  }
}

export const RootPitchOption = (props: RootPitchOptionProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { rootPitchId } = activeHarpStrata

  const rootPitchOptionContainerProps = {
    title: 'Position Key',
    optionId: rootPitchId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByRootPitch, activeHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  return <OptionContainer {...rootPitchOptionContainerProps}/>
}
