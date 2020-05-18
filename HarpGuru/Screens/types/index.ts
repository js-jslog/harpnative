import type { HarpStrata } from 'harpstrata'

import type { DisplayModes } from '../../HarpFace'

export type ScreenProps = {
  readonly activeHarpStrata: HarpStrata;
  readonly activeDisplayMode: DisplayModes;
  readonly setActiveHarpStrata: (activeHarpStrata: HarpStrata) => void;
  readonly setDisplayMode: (displayMode: DisplayModes) => void;
}
