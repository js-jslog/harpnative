import { HarpStrata } from 'harpstrata'

import {DisplayModes} from '../../../HarpFace'

export const nudgeDisplayMode = (activeHarpStrata: HarpStrata, displayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void, direction: 'UP' | 'DOWN'): HarpStrata => {
  if (displayMode === DisplayModes.Degree) {
    setActiveDisplayMode(DisplayModes.Pitch)
  } else {
    setActiveDisplayMode(DisplayModes.Degree)
  }

  return { ...activeHarpStrata }
}
