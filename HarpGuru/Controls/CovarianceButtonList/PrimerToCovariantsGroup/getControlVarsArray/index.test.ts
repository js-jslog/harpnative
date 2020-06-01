import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars, PozitionControlVars, RootPitchControlVars } from 'harpstrata'

import { CovariantTypes } from '../../types'

import { getControlVarsArray } from './index'

test('can get an array of HarpKeyControlVars with locked pozition', () => {
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

test('can get an array of PozitionControlVars with locked root pitch', () => {
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

test('can get an array of RootPitchControlVars with locked harp key', () => {
  const { HarpKey: lockedType } = CovariantTypes
  const { Pozition: variedType } = CovariantTypes
  const { B: lockedValue } = PitchIds
  const { Eighth: variedValue } = PozitionIds

  const expectedControlVarsArray: ReadonlyArray<RootPitchControlVars> = [{
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Eighth,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Third,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Tenth,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Fifth,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Twelfth,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Seventh,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Second,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Ninth,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Fourth,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Eleventh,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.Sixth,
  }, {
    harpKeyId: PitchIds.B,
    pozitionId: PozitionIds.First,
  }]

  const actualControlVarsArray = getControlVarsArray({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVarsArray).toStrictEqual(expectedControlVarsArray)
})
