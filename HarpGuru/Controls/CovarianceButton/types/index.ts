import type { CovariantSet } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'
import type { CovariancePrimer } from '../../CovariantsGroupList'

export type CovarianceButtonProps =
  HarpStrataControlProps
& Pick<CovariancePrimer, 'lockedType' | 'variedType'>
& CovariantSet
