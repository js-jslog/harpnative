import type { PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type PitchButtonProps = HarpStrataControlProps & {
  readonly id: PitchIds;
}
