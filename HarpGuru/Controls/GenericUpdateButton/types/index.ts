import type { PozitionButtonProps } from '../../PozitionButton'
import type { HarpKeyUpdateButtonProps } from '../../HarpKeyUpdateButton'

export type PozitionUpdateProps = PozitionButtonProps & {
  readonly updateCategory: UpdateCategories.Pozition;
}
export type HarpKeyUpdateProps = HarpKeyUpdateButtonProps & {
  readonly updateCategory: UpdateCategories.HarpKey;
}

export type GenericUpdateProps = PozitionUpdateProps | HarpKeyUpdateProps

export enum UpdateCategories {
  Pozition = 'POZITION',
  HarpKey = 'HARP_KEY',
}
