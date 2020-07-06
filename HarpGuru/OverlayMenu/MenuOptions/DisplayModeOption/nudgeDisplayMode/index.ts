import {DisplayModes} from '../../../../HarpFace'

export const nudgeDisplayMode = (activeDisplayMode: DisplayModes, setActiveDisplayMode: (arg0: DisplayModes) => void): void => {
  if (activeDisplayMode === DisplayModes.Degree) {
    setActiveDisplayMode(DisplayModes.Pitch)
  } else {
    setActiveDisplayMode(DisplayModes.Degree)
  }
}
