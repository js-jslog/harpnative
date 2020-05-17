import { getHarpStrata, ApparatusIds, PozitionIds, PitchIds } from 'harpstrata'
import type { HarpStrataProps } from 'harpstrata'

import type { HarpStrataControlProps } from '../types'

export const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [],
}
export const firstPozitionCMajorDiatonicHarpStrataProps: HarpStrataProps = { ...baseHarpStrataProps }
export const secondPozitionCMajorDiatonicHarpStrataProps: HarpStrataProps = { ...baseHarpStrataProps, pozitionId: PozitionIds.Second }

export const firstPozitionCMajorDiatonicHarpStrata = getHarpStrata(firstPozitionCMajorDiatonicHarpStrataProps)
export const secondPozitionCMajorDiatonicHarpStrata = getHarpStrata(secondPozitionCMajorDiatonicHarpStrataProps)

export const exampleHarpStrataControlProps: HarpStrataControlProps = {
  activeHarpStrata: firstPozitionCMajorDiatonicHarpStrata,
  setActiveHarpStrata: jest.fn(),
}
