import { getHarpStrata, getCovariantSet } from 'harpstrata'
import type { PitchIds, HarpStrata, CovariantControllers } from 'harpstrata'

import { getPropsForHarpStrata } from '../getPropsForHarpStrata'
import { DisplayModes } from '../../../HarpFace'

export type GetHarpStrataProps = {
  readonly activeHarpStrata: HarpStrata;
  readonly rootPitchId: PitchIds;
  readonly activeDisplayMode: DisplayModes;
}

const getCovariantControllers = (props: GetHarpStrataProps): CovariantControllers => {
  const { activeHarpStrata: { harpKeyId, pozitionId }, activeDisplayMode, rootPitchId } = props
  if ( activeDisplayMode === DisplayModes.Degree ) return { harpKeyId, rootPitchId }
  return { pozitionId, rootPitchId }
}

export const getNewHarpStrata = (props: GetHarpStrataProps): HarpStrata => {
  const { activeHarpStrata } = props
  const activeHarpStrataProps = getPropsForHarpStrata(activeHarpStrata)

  const covariantControllers = getCovariantControllers(props)

  const { harpKeyId, pozitionId } = getCovariantSet(covariantControllers)

  return getHarpStrata({ ...activeHarpStrataProps, harpKeyId, pozitionId })
}
