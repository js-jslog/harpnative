import { PitchIds, PozitionIds } from 'harpstrata'
import type { RootPitchControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

import { getRootPitchControlVars } from './index'

test('getRootPitchControlVars returns a RootPitchControlVars for a locked harp key', () => {
  const { HarpKey: lockedType } = CovariantTypes
  const { Pozition: variedType } = CovariantTypes
  const { D: lockedValue } = PitchIds
  const { Second: variedValue } = PozitionIds

  const expectedControlVars: RootPitchControlVars = {
    harpKeyId: PitchIds.D,
    pozitionId: PozitionIds.Second,
  }

  const actualControlVars = getRootPitchControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getRootPitchControlVars returns a RootPitchControlVars for a locked root pitch', () => {
  const { Pozition: lockedType } = CovariantTypes
  const { HarpKey: variedType } = CovariantTypes
  const { Eighth: lockedValue } = PozitionIds
  const { A: variedValue } = PitchIds

  const expectedControlVars: RootPitchControlVars = {
    harpKeyId: PitchIds.A,
    pozitionId: PozitionIds.Eighth,
  }

  const actualControlVars = getRootPitchControlVars({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
