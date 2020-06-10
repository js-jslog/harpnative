import { ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata, HarpStrataProps, ActiveIds } from 'harpstrata'

const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const keyCHarpStrataProps: HarpStrataProps = {
  ...baseHarpStrataProps,
  harpKeyId: PitchIds.C
}
const keyDHarpStrataProps: HarpStrataProps = {
  ...baseHarpStrataProps,
  harpKeyId: PitchIds.D
}
const cHarpSecondPozHarpStrataProps: HarpStrataProps = {
  ...baseHarpStrataProps,
  pozitionId: PozitionIds.Second,
  harpKeyId: PitchIds.C
}

const gHarpFirstPozHarpStrataProps: HarpStrataProps = {
  ...baseHarpStrataProps,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.G
}

export const keyCHarpStrata: HarpStrata = getHarpStrata(keyCHarpStrataProps)
export const keyDHarpStrata: HarpStrata = getHarpStrata(keyDHarpStrataProps)
export const cHarpSecondPozHarpStrata: HarpStrata = getHarpStrata(cHarpSecondPozHarpStrataProps)
export const gHarpFirstPozHarpStrata: HarpStrata = getHarpStrata(gHarpFirstPozHarpStrataProps)
