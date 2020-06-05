import { getCovariantSet, CovariantSet } from 'harpstrata'

import type { CovariancePrimer } from '../types'
import { getSeriesControllers } from '../getSeriesControllers'

export const getCovarianceSeries = (props: CovariancePrimer): ReadonlyArray<CovariantSet> => {
  const seriesControllers = getSeriesControllers(props)
  
  return seriesControllers.map((covariantControllers) => {
    return getCovariantSet(covariantControllers)
  })
}
