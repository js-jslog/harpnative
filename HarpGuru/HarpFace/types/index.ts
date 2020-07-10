import type { HarpRowProps } from '../HarpRow'

// TODO: this should probably be moved in to HarpCell since
// that's where it's really required
export enum DisplayModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}

export type HarpFaceProps = Omit<HarpFaceFragmentProps, 'xRange'>

export type HarpFaceFragmentProps = Omit<HarpRowProps, 'yCoord'>

export type HarpFaceFacts = {
  readonly columnCount: number
  readonly rowCount: number
}
