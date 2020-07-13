import type { HarpFaceFragmentProps } from '../HarpFaceFragment'

export type HarpFaceProps = Omit<HarpFaceFragmentProps, 'xRange'>

export enum DisplayModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}
