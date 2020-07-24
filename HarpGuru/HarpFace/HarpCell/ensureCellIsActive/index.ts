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
  const newActiveIds = [ ...activeIds, cellId ].filter((item, index, self) => {
    return self.indexOf(item) === index
  }) as DegreeIds[]
  return getHarpStrata({
    ...harpStrataProps,
    activeIds: newActiveIds
  })
}
