import { isPitchId, getPitchIds, DegreeIds } from 'harpstrata'

import type { ActivityLegendCellProps } from '../types'

type LegendKeyFacts = {
  readonly isActive: boolean;
  readonly counterpartDegreeId: DegreeIds;
}

const getIsActive = (props: ActivityLegendCellProps): boolean => {
  const { itemId, activeIds } = props

  const isActive = [...activeIds].includes(itemId)

  return isActive
}

const getCounterpartDegreeId = (props: ActivityLegendCellProps): DegreeIds => {
  const { activeHarpStrata: { rootPitchId }, itemId } = props

  if (!isPitchId(itemId)) return itemId

  const itemIndex = getPitchIds(rootPitchId).indexOf(itemId)

  const { [itemIndex]: counterpartDegreeId } = Object.values(DegreeIds)

  return counterpartDegreeId
}

export const analyseLegendKey = (props: ActivityLegendCellProps): LegendKeyFacts => {
  const isActive = getIsActive(props)
  const counterpartDegreeId = getCounterpartDegreeId(props)

  return { isActive, counterpartDegreeId }
}
