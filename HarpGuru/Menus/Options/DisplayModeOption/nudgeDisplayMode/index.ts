import type { SetActiveDisplayMode } from '../../../../HarpGuru'
import {DisplayModes} from '../../../../HarpFace'

type PartialParams = {
  readonly activeDisplayMode: DisplayModes
  readonly setActiveDisplayMode: SetActiveDisplayMode
}

export const nudgeDisplayMode = (partialParams: PartialParams): void => {
  const { activeDisplayMode, setActiveDisplayMode } = partialParams

  if (activeDisplayMode === DisplayModes.Degree) {
    setActiveDisplayMode(DisplayModes.Pitch)
  } else {
    setActiveDisplayMode(DisplayModes.Degree)
  }
}
