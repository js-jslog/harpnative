import type { PozitionIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'

export type PozitionButtonProps = HarpStrataControlProps & {
  readonly id: PozitionIds;
}
