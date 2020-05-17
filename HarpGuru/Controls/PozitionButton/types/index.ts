import type { PozitionIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type PitchButtonProps = HarpStrataControlProps & {
  readonly id: PozitionIds;
}
