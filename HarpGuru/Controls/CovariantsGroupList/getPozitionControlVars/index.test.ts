import { PitchIds } from 'harpstrata'
import type { PozitionControlVars } from 'harpstrata'

import { CovarianceParts } from '../types'

import { getPozitionControlVars } from './index'

test('getPozitionControlVars returns a PozitionControlVars for a locked harp key', () => {
  const { HarpKey: lockedType } = CovarianceParts
  const { RootPitch: variedType } = CovarianceParts
  const { D: lockedValue } = PitchIds
  const { C: variedValue } = PitchIds

  const expectedControlVars: PozitionControlVars = {
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.C,
  }

  const actualControlVars = getPozitionControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getPozitionControlVars returns a PozitionControlVars for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovarianceParts
  const { HarpKey: variedType } = CovarianceParts
  const { Eb: lockedValue } = PitchIds
  const { A: variedValue } = PitchIds

  const expectedControlVars: PozitionControlVars = {
    harpKeyId: PitchIds.A,
    rootPitchId: PitchIds.Eb,
  }

  const actualControlVars = getPozitionControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
