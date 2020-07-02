import React from 'react'
import {HarpStrata} from 'harpstrata'

import { nudgeHarpStrataByHarpKey } from '../nudgeHarpStrataByHarpKey'
import { OptionContainer } from '../../OptionContainer'
import type { OptionControlProps } from '../../../types'
import type { DisplayModes } from '../../../../HarpFace'


type FullNudgeFunction = (arg0: HarpStrata, arg1: 'UP' | 'DOWN', arg2: DisplayModes) => HarpStrata
type PartiallyAppliedNudgeFunction = (arg0: 'UP' | 'DOWN') => HarpStrata

const partiallyApplyCovariantNudgeFunction = (nudgeFunction: FullNudgeFunction, activeHarpStrata: HarpStrata, activeDisplayMode: DisplayModes): PartiallyAppliedNudgeFunction => {
  return (direction: 'UP' | 'DOWN') => {
    return nudgeFunction(activeHarpStrata, direction, activeDisplayMode)
  }
}

export const HarpKeyOption = (props: OptionControlProps): React.ReactElement => {
  const { activeHarpStrata, setActiveHarpStrata, activeDisplayMode } = props
  const { harpKeyId } = activeHarpStrata

  const harpKeyOptionContainerProps = {
    title: 'Harp Key',
    optionId: harpKeyId,
    nudgeFunction: partiallyApplyCovariantNudgeFunction(nudgeHarpStrataByHarpKey, activeHarpStrata, activeDisplayMode),
    setActiveHarpStrata,
  }

  return <OptionContainer {...harpKeyOptionContainerProps}/>
}
