import type { ActivityLegendCellProps } from '../types'

type LegendKeyFacts = {
  readonly isActive: boolean;
}

const getIsActive = (props: ActivityLegendCellProps): boolean => {
  const { itemId, activeIds } = props

  const isActive = [...activeIds].includes(itemId)

  return isActive
}

export const analyseLegendKey = (props: ActivityLegendCellProps): LegendKeyFacts => {
  const isActive = getIsActive(props)

  return { isActive }
}
