import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars, PozitionControlVars } from 'harpstrata'

import { CovariantTypes } from '../../types'

import { getControlVarsArray } from './index'

test('given a locked pozition and a C root pitch variance origin, an array of the possible covariant control vars is produced', () => {
  const { Pozition: lockedType } = CovariantTypes
  const { RootPitch: variedType } = CovariantTypes
  const { First: lockedValue } = PozitionIds
  const { C: variedValue } = PitchIds

  const expectedControlVarsArray: ReadonlyArray<HarpKeyControlVars> = [{
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.C,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.Db,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.D,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.Eb,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.E,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.F,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.Gb,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.G,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.Ab,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.A,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.Bb,
  }, {
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.B,
  }]

  const actualControlVarsArray = getControlVarsArray({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVarsArray).toStrictEqual(expectedControlVarsArray)
})

test('given a locked root pitch at Gb and an F harp key variance origin, an array of the possible covariant control vars is produced', () => {
  const { RootPitch: lockedType } = CovariantTypes
  const { HarpKey: variedType } = CovariantTypes
  const { Gb: lockedValue } = PitchIds
  const { F: variedValue } = PitchIds

  const expectedControlVarsArray: ReadonlyArray<PozitionControlVars> = [{
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.F,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.Gb,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.G,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.Ab,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.A,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.Bb,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.B,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.C,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.Db,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.D,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.Eb,
  }, {
    rootPitchId: PitchIds.Gb,
    harpKeyId: PitchIds.E,
  }]

  const actualControlVarsArray = getControlVarsArray({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVarsArray).toStrictEqual(expectedControlVarsArray)
})
