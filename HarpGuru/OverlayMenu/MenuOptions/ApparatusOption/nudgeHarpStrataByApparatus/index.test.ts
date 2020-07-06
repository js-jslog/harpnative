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
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByApparatus(countryTunedHarp, setActiveHarpStrata, 'UP')

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(naturalMinorHarp)
})

test('provides decremented HarpStrata by apparatus', () => {
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByApparatus(countryTunedHarp, setActiveHarpStrata, 'DOWN')

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(majorDiatonicHarp)
})

test('provides incremented HarpStrata by apparatus across array limit', () => {
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByApparatus(naturalMinorHarp, setActiveHarpStrata, 'UP')

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(majorDiatonicHarp)
})

test('provides decremented HarpStrata by apparatus across array limit', () => {
  const setActiveHarpStrata = jest.fn()
  nudgeHarpStrataByApparatus(majorDiatonicHarp, setActiveHarpStrata, 'DOWN')

  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(naturalMinorHarp)
})
