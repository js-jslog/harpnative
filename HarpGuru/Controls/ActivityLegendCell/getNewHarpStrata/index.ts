import { getHarpStrata, getCovariantSet } from 'harpstrata'
import type { PitchIds, HarpStrata } from 'harpstrata'

import { getPropsForHarpStrata } from '../getPropsForHarpStrata'
import type { DisplayModes } from '../../../HarpFace'

type GetHarpStrataProps = {
  readonly activeHarpStrata: HarpStrata;
  readonly rootPitchId: PitchIds;
  readonly activeDisplayMode: DisplayModes;
}

export const getNewHarpStrata = (props: GetHarpStrataProps): HarpStrata => {
  const { activeHarpStrata, rootPitchId } = props
  const { harpKeyId } = activeHarpStrata
  const activeHarpStrataProps = getPropsForHarpStrata(activeHarpStrata)
  const pozitionControllers = { harpKeyId, rootPitchId }

  const { pozitionId } = getCovariantSet(pozitionControllers)

  return getHarpStrata({ ...activeHarpStrataProps, harpKeyId, pozitionId })
}
