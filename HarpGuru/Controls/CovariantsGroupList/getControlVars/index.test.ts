import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControllers, PozitionControllers, RootPitchControllers } from 'harpstrata'

import { CovarianceParts } from '../types'

import { getControlVars } from './index'

test('getControlVars returns a HarpKeyControllers for a locked pozition', () => {
  const { Pozition: lockedType } = CovarianceParts
  const { RootPitch: variedType } = CovarianceParts
  const { Second: lockedValue } = PozitionIds
  const { C: variedValue } = PitchIds

  const expectedControllers: HarpKeyControllers = {
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.C,
  }

  const actualControllers = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControllers).toEqual(expectedControllers)
})

test('getControlVars returns a HarpKeyControllers for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovarianceParts
  const { Pozition: variedType } = CovarianceParts
  const { Eb: lockedValue } = PitchIds
  const { Fourth: variedValue } = PozitionIds

  const expectedControllers: HarpKeyControllers = {
    pozitionId: PozitionIds.Fourth,
    rootPitchId: PitchIds.Eb,
  }

  const actualControllers = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControllers).toEqual(expectedControllers)
})

test('getControlVars returns a PozitionControllers for a locked harp key', () => {
  const { HarpKey: lockedType } = CovarianceParts
  const { RootPitch: variedType } = CovarianceParts
  const { D: lockedValue } = PitchIds
  const { C: variedValue } = PitchIds

  const expectedControllers: PozitionControllers = {
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.C,
  }

  const actualControllers = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControllers).toEqual(expectedControllers)
})

test('getControlVars returns a PozitionControllers for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovarianceParts
  const { HarpKey: variedType } = CovarianceParts
  const { Eb: lockedValue } = PitchIds
  const { A: variedValue } = PitchIds

  const expectedControllers: PozitionControllers = {
    harpKeyId: PitchIds.A,
    rootPitchId: PitchIds.Eb,
  }

  const actualControllers = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControllers).toEqual(expectedControllers)
})

test('getControlVars returns a RootPitchControllers for a locked pozition', () => {
  const { Pozition: lockedType } = CovarianceParts
  const { HarpKey: variedType } = CovarianceParts
  const { Fifth: lockedValue } = PozitionIds
  const { A: variedValue } = PitchIds

  const expectedControllers: RootPitchControllers = {
    harpKeyId: PitchIds.A,
    pozitionId: PozitionIds.Fifth,
  }

  const actualControllers = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControllers).toEqual(expectedControllers)
})
