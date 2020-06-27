import type { HarpStrata, HarpStrataProps } from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'

type GetPropsForHarpStrataProps = HarpStrata & {
  readonly displayMode: DisplayModes
}

export const getPropsForHarpStrata = (props: GetPropsForHarpStrataProps): HarpStrataProps => {
  const { apparatus: { id: apparatusId }} = props
  const { pozitionId } = props
  const { harpKeyId } = props
  const { isActiveComplex: { activePitchIds, activeDegreeIds }} = props

  const { displayMode } = props

  if (displayMode === DisplayModes.Degree) {
    return { apparatusId, pozitionId, harpKeyId, activeIds: activeDegreeIds }
  }

  return { apparatusId, pozitionId, harpKeyId, activeIds: activePitchIds }
}
