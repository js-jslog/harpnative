import type { ActivityLegendCellProps } from '../types'

type LegendKeyFacts = {
  readonly isActive: boolean;
}

export const analyseLegendKey = (props: ActivityLegendCellProps): LegendKeyFacts => {
  const { itemId, activeIds } = props

  const isActive = [...activeIds].includes(itemId)

  return { isActive }
}
