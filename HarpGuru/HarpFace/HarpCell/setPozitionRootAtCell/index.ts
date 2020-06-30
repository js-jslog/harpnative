import { getHarpStrata, getCovariantSet } from 'harpstrata'
import type { PitchIds, HarpStrata } from 'harpstrata'

import { DisplayModes } from '../../../HarpFace'
import { getPropsForHarpStrata } from '../../../Controls/ControlHelpers'

export type GetHarpStrataProps = {
  readonly activeHarpStrata: HarpStrata;
  readonly newRootPitchId: PitchIds;
}

export const setPozitionRootAtCell = (props: GetHarpStrataProps): HarpStrata => {
  const { activeHarpStrata, newRootPitchId } = props
  const { harpKeyId: activeHarpKeyId } = activeHarpStrata
  const activeHarpStrataProps = getPropsForHarpStrata(activeHarpStrata, DisplayModes.Pitch)

  const covariantControllers = { harpKeyId: activeHarpKeyId, rootPitchId: newRootPitchId }
  const { harpKeyId: newHarpKeyId, pozitionId: newPozitionId } = getCovariantSet(covariantControllers)

  return getHarpStrata({
    ...activeHarpStrataProps,
    harpKeyId: newHarpKeyId,
    pozitionId: newPozitionId
  })
}
