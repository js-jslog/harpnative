import type { PozitionButtonProps } from '../../PozitionButton'
import type { HarpKeyUpdateButtonProps } from '../../HarpKeyUpdateButton'

export type PozitionButtonGenericProps = PozitionButtonProps & {
  readonly updateCategory: UpdateCategories.Pozition;
}
export type HarpKeyButtonGenericProps = HarpKeyUpdateButtonProps & {
  readonly updateCategory: UpdateCategories.HarpKey;
}

export type GenericButtonProps = PozitionButtonGenericProps | HarpKeyButtonGenericProps

export enum UpdateCategories {
  Pozition = 'POZITION',
  HarpKey = 'HARP_KEY',
}
