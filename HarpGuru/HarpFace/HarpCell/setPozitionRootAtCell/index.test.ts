import { PitchIds, HarpStrataProps, ApparatusIds, PozitionIds, ActiveIds, HarpStrata, getHarpStrata } from 'harpstrata'

import { setPozitionRootAtCell } from './index'

const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
export const keyCHarpStrataProps: HarpStrataProps = {
  ...baseHarpStrataProps,
  harpKeyId: PitchIds.C
}
export const cHarpSecondPozHarpStrataProps: HarpStrataProps = {
  ...baseHarpStrataProps,
  pozitionId: PozitionIds.Second,
  harpKeyId: PitchIds.C
}
export const keyCHarpStrata: HarpStrata = getHarpStrata(keyCHarpStrataProps)
export const cHarpSecondPozHarpStrata: HarpStrata = getHarpStrata(cHarpSecondPozHarpStrataProps)

test('The function returns a harpstrata with the pozition shifted to meet the root pitch requirement', () => {
  const activeHarpStrata = keyCHarpStrata
  const { G: newRootPitchId } = PitchIds

  const getNewHarpStrataProps = {
    activeHarpStrata, newRootPitchId
  }

  const expectedHarpStrata = cHarpSecondPozHarpStrata
  const actualHarpStrata = setPozitionRootAtCell(getNewHarpStrataProps)

  expect(actualHarpStrata).toStrictEqual(expectedHarpStrata)
})
