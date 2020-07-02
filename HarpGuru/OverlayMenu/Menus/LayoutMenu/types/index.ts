import type { HarpStrata } from 'harpstrata'

import type { DisplayModes } from '../../../../HarpFace'

export type LayoutMenuProps = {
  readonly activeHarpStrata: HarpStrata,
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
  readonly activeDisplayMode: DisplayModes
  readonly setActiveDisplayMode: (arg0: DisplayModes) => void
}
