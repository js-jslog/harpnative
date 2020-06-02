import type { CovariantsGroup } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'
import type { ControlVarsPrimer } from '../../CovariantsGroupList'

// TODO: this should compose on top of CovarianceButtonListProps
export type CovarianceButtonProps = HarpStrataControlProps & Pick<ControlVarsPrimer, 'lockedType' | 'variedType'> & CovariantsGroup
