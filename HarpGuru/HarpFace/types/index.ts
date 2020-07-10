import type { HarpRowProps } from '../HarpRow'

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
