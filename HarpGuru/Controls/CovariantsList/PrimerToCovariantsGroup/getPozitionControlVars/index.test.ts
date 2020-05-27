import { PitchIds } from 'harpstrata'
import type { PozitionControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

import { getPozitionControlVars } from './index'

test('getPozitionControlVars returns an array of PozitionControlVars for a locked harp key', () => {
  const { HarpKey: lockedType } = CovariantTypes
  const { RootPitch: variedType } = CovariantTypes
  const { D: lockedValue } = PitchIds
  const { C: variedValue } = PitchIds

  const expectedControlVars: PozitionControlVars = {
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.C,
  }

  const actualControlVars = getPozitionControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getPozitionControlVars returns an array of PozitionControlVars for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovariantTypes
  const { HarpKey: variedType } = CovariantTypes
  const { Eb: lockedValue } = PitchIds
  const { A: variedValue } = PitchIds

  const expectedControlVars: PozitionControlVars = {
    harpKeyId: PitchIds.A,
    rootPitchId: PitchIds.Eb,
  }

  const actualControlVars = getPozitionControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
