import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

import { getControlVars } from './index'

test('getControlVars returns a HarpKeyControlVars for a locked pozition', () => {
  const { Pozition: lockedType } = CovariantTypes
  const { RootPitch: variedType } = CovariantTypes
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
  const { RootPitch: lockedType } = CovariantTypes
  const { Pozition: variedType } = CovariantTypes
  const { Eb: lockedValue } = PitchIds
  const { Fourth: variedValue } = PozitionIds

  const expectedControlVars: HarpKeyControlVars = {
    pozitionId: PozitionIds.Fourth,
    rootPitchId: PitchIds.Eb,
  }

  const actualControlVars = getControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
