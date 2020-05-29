import type { CovariantControlVars } from 'harpstrata'

import type { HarpStrataControlProps } from '../../../types'

export type CovarianceButtonProps = HarpStrataControlProps & {
  readonly covariantControlVars: CovariantControlVars;
}
