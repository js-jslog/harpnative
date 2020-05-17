import type { DisplayModes } from '../../../HarpFace'

export type DisplayModeTogglerProps = {
  readonly setDisplayMode: (displayMode: DisplayModes) => void;
}
