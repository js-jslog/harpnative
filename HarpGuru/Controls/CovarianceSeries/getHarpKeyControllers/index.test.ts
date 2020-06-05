import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControllers } from 'harpstrata'

import { CovariantMembers } from '../types'

import { getHarpKeyControllers } from './index'

test('getHarpKeyControllers returns a HarpKeyControllers for a locked pozition', () => {
  const { Pozition: lockedType } = CovariantMembers
  const { RootPitch: variedType } = CovariantMembers
  const { Second: lockedValue } = PozitionIds
  const { C: variedValue } = PitchIds

  const expectedControlVars: HarpKeyControllers = {
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.C,
  }

  const actualControlVars = getHarpKeyControllers({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getHarpKeyControllers returns a HarpKeyControllers for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovariantMembers
  const { Pozition: variedType } = CovariantMembers
  const { Eb: lockedValue } = PitchIds
  const { Fourth: variedValue } = PozitionIds

  const expectedControlVars: HarpKeyControllers = {
    pozitionId: PozitionIds.Fourth,
    rootPitchId: PitchIds.Eb,
  }

  const actualControlVars = getHarpKeyControllers({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
