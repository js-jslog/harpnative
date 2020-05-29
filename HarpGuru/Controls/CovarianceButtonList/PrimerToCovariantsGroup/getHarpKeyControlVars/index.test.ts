import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars } from 'harpstrata'

import { CovariantTypes } from '../../types'

import { getHarpKeyControlVars } from './index'

test('getHarpKeyControlVars returns a HarpKeyControlVars for a locked pozition', () => {
  const { Pozition: lockedType } = CovariantTypes
  const { RootPitch: variedType } = CovariantTypes
  const { Second: lockedValue } = PozitionIds
  const { C: variedValue } = PitchIds

  const expectedControlVars: HarpKeyControlVars = {
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.C,
  }

  const actualControlVars = getHarpKeyControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getHarpKeyControlVars returns a HarpKeyControlVars for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovariantTypes
  const { Pozition: variedType } = CovariantTypes
  const { Eb: lockedValue } = PitchIds
  const { Fourth: variedValue } = PozitionIds

  const expectedControlVars: HarpKeyControlVars = {
    pozitionId: PozitionIds.Fourth,
    rootPitchId: PitchIds.Eb,
  }

  const actualControlVars = getHarpKeyControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
