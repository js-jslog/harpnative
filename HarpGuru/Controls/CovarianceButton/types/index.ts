import type { CovariantSet } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'
import type { ControlVarsPrimer } from '../../CovariantsGroupList'

export type CovarianceButtonProps =
  HarpStrataControlProps
& Pick<ControlVarsPrimer, 'lockedType' | 'variedType'>
& CovariantSet
