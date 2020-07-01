import type { HarpStrata } from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'

export type CovariantMenuProps = {
  readonly activeHarpStrata: HarpStrata,
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
  readonly activeDisplayMode: DisplayModes
}
