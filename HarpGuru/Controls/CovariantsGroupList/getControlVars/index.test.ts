import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars, PozitionControlVars, RootPitchControlVars } from 'harpstrata'

import { CovarianceParts } from '../types'

import { getControlVars } from './index'

test('getControlVars returns a HarpKeyControlVars for a locked pozition', () => {
  const { Pozition: lockedType } = CovarianceParts
  const { RootPitch: variedType } = CovarianceParts
  const { Second: lockedValue } = PozitionIds
  const { C: variedValue } = PitchIds

  const expectedControlVars: HarpKeyControlVars = {
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.C,
  }

  const actualControlVars = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getControlVars returns a HarpKeyControlVars for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovarianceParts
  const { Pozition: variedType } = CovarianceParts
  const { Eb: lockedValue } = PitchIds
  const { Fourth: variedValue } = PozitionIds

  const expectedControlVars: HarpKeyControlVars = {
    pozitionId: PozitionIds.Fourth,
    rootPitchId: PitchIds.Eb,
  }

  const actualControlVars = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getControlVars returns a PozitionControlVars for a locked harp key', () => {
  const { HarpKey: lockedType } = CovarianceParts
  const { RootPitch: variedType } = CovarianceParts
  const { D: lockedValue } = PitchIds
  const { C: variedValue } = PitchIds

  const expectedControlVars: PozitionControlVars = {
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.C,
  }

  const actualControlVars = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getControlVars returns a PozitionControlVars for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovarianceParts
  const { HarpKey: variedType } = CovarianceParts
  const { Eb: lockedValue } = PitchIds
  const { A: variedValue } = PitchIds

  const expectedControlVars: PozitionControlVars = {
    harpKeyId: PitchIds.A,
    rootPitchId: PitchIds.Eb,
  }

  const actualControlVars = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getControlVars returns a RootPitchControlVars for a locked pozition', () => {
  const { Pozition: lockedType } = CovarianceParts
  const { HarpKey: variedType } = CovarianceParts
  const { Fifth: lockedValue } = PozitionIds
  const { A: variedValue } = PitchIds

  const expectedControlVars: RootPitchControlVars = {
    harpKeyId: PitchIds.A,
    pozitionId: PozitionIds.Fifth,
  }

  const actualControlVars = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
