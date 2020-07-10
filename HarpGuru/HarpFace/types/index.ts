import type { HarpFaceFragmentProps } from '../HarpFaceFragment'

export enum DisplayModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}

export type HarpFaceProps = Omit<HarpFaceFragmentProps, 'xRange'>
