import type { HarpStrata, HarpStrataProps } from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'

type GetPropsForHarpStrataProps = HarpStrata & {
  readonly displayMode: DisplayModes
}

export const getPropsForHarpStrata = (props: GetPropsForHarpStrataProps): HarpStrataProps => {
  const { apparatus: { id: apparatusId }} = props
  const { pozitionId } = props
  const { harpKeyId } = props
  const { isActiveComplex: { activePitchIds: activeIds }} = props


  const harpStrataProps = {
    apparatusId, pozitionId, harpKeyId, activeIds
  }

  return harpStrataProps
}
