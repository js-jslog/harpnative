import type { PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type ActivityLegendProps = HarpStrataControlProps & {
  readonly rootPitchId: PitchIds;
}
