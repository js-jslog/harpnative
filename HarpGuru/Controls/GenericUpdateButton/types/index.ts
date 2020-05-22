import type { PozitionButtonProps } from '../../PozitionButton'
import type { HarpKeyButtonProps } from '../../HarpKeyUpdateButton'

export type PozitionButtonGenericProps = PozitionButtonProps & {
  readonly updateCategory: UpdateCategories.Pozition;
}
export type HarpKeyButtonGenericProps = HarpKeyButtonProps & {
  readonly updateCategory: UpdateCategories.HarpKey;
}

export type GenericButtonProps = PozitionButtonGenericProps | HarpKeyButtonGenericProps

export enum UpdateCategories {
  Pozition = 'POZITION',
  HarpKey = 'HARP_KEY',
}
