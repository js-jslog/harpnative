import type { HarpStrata } from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'

export type CovariantOptionsProps = {
  readonly activeHarpStrata: HarpStrata,
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
  readonly activeDisplayMode: DisplayModes
}
