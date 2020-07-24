import { HarpStrata, DegreeIds, getHarpStrata } from 'harpstrata'

import {DisplayModes} from '../../../types'
import { getPropsForHarpStrata } from '../../../helpers'

type Props = {
  readonly harpStrata: HarpStrata
  readonly cellId: DegreeIds
}
export const ensureCellIsActive = (props: Props): HarpStrata => {
  const { harpStrata, cellId } = props
  const harpStrataProps = getPropsForHarpStrata(harpStrata, DisplayModes.Degree)
  const { activeIds } = harpStrataProps
  return getHarpStrata({
    ...harpStrataProps,
    activeIds: [...activeIds, cellId] as DegreeIds[]
  })
}
