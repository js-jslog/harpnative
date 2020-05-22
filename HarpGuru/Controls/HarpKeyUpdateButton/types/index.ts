import type { PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type HarpKeyButtonProps = HarpStrataControlProps & {
  readonly id: PitchIds;
}
