import { HarpStrata } from 'harpstrata'

import {DisplayModes} from '../../../../HarpFace'

export const nudgeDisplayMode = (activeHarpStrata: HarpStrata, activeDisplayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void): HarpStrata => {
  if (activeDisplayMode === DisplayModes.Degree) {
    setActiveDisplayMode(DisplayModes.Pitch)
  } else {
    setActiveDisplayMode(DisplayModes.Degree)
  }

  return { ...activeHarpStrata }
}
