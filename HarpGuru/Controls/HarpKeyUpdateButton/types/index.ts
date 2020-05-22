import type { PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type HarpKeyUpdateButtonProps = HarpStrataControlProps & {
  readonly id: PitchIds;
}
