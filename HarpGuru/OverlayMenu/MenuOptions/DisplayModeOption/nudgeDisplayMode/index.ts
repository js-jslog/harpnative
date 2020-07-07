import {DisplayModes} from '../../../../HarpFace'

type PartialParams = {
  readonly activeDisplayMode: DisplayModes
  readonly setActiveDisplayMode: (arg0: DisplayModes) => void
}

export const nudgeDisplayMode = (partialParams: PartialParams, direction: 'UP' | 'DOWN'): void => {
  const { activeDisplayMode, setActiveDisplayMode } = partialParams

  if (activeDisplayMode === DisplayModes.Degree) {
    setActiveDisplayMode(DisplayModes.Pitch)
  } else {
    setActiveDisplayMode(DisplayModes.Degree)
  }
}
