import {HarpStrataProps, ApparatusIds, PozitionIds, PitchIds, ActiveIds, getHarpStrata} from 'harpstrata'

import { nudgeHarpStrataByApparatus } from './index'

const baseHarpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const majorDiatonicHarpProps = baseHarpStrataProps
const countryTunedHarpProps = { ...baseHarpStrataProps, apparatusId: ApparatusIds.CountryTuned }
const naturalMinorHarpProps = { ...baseHarpStrataProps, apparatusId: ApparatusIds.NaturalMinor }

const majorDiatonicHarp = getHarpStrata(majorDiatonicHarpProps)
const countryTunedHarp = getHarpStrata(countryTunedHarpProps)
const naturalMinorHarp = getHarpStrata(naturalMinorHarpProps)

test('provides incremented HarpStrata by apparatus', () => {
  const actualIncrementedHarpStrata = nudgeHarpStrataByApparatus(countryTunedHarp, 'UP')

  expect(actualIncrementedHarpStrata).toStrictEqual(naturalMinorHarp)
})

test('provides decremented HarpStrata by apparatus', () => {
  const actualDecrementededHarpStrata = nudgeHarpStrataByApparatus(countryTunedHarp, 'DOWN')

  expect(actualDecrementededHarpStrata).toStrictEqual(majorDiatonicHarp)
})

test('provides incremented HarpStrata by apparatus across array limit', () => {
  const actualIncrementedHarpStrata = nudgeHarpStrataByApparatus(naturalMinorHarp, 'UP')

  expect(actualIncrementedHarpStrata).toStrictEqual(majorDiatonicHarp)
})

test('provides decremented HarpStrata by apparatus across array limit', () => {
  const actualDecrementededHarpStrata = nudgeHarpStrataByApparatus(majorDiatonicHarp, 'DOWN')

  expect(actualDecrementededHarpStrata).toStrictEqual(naturalMinorHarp)
})
