import type { HarpStrata } from 'harpstrata'

import type { HarpRowProps } from '../HarpRow'
import type { SetActiveHarpStrata } from '../../HarpGuru'

// TODO: this should probably be moved in to HarpCell since
// that's where it's really required
export enum DisplayModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}

export type HarpFaceProps = {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: SetActiveHarpStrata
  readonly activeDisplayMode: DisplayModes
}

export type HarpFaceFragmentProps = Omit<HarpRowProps, 'yCoord'>

export type HarpFaceFacts = {
  readonly columnCount: number
  readonly rowCount: number
}
