import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars, PozitionControlVars, RootPitchControlVars } from 'harpstrata'

export enum CovariantTypes {
  HarpKey = 'harpKeyId',
  Pozition = 'pozitionId',
  RootPitch = 'rootPitchId',
}

import { getControlVarsList } from './index'

test.skip('getControlVarsList returns an array of PozitionControlVars when given PozitionControlPrimer for a locked harp key', () => {
  const { HarpKey: lockedType } = CovariantTypes
  const { RootPitch: variedType } = CovariantTypes
  const { D: lockedValue } = PitchIds
  const { C: variedValue } = PitchIds

  const expectedControlVarsList: ReadonlyArray<PozitionControlVars> = [{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.C,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.Db,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.D,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.Eb,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.E,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.F,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.Gb,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.G,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.Ab,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.A,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.Bb,
  },{
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.B,
  }]

  const actualControlVarsList = getControlVarsList({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVarsList).toEqual(expectedControlVarsList)
})

test('getControlVarsList returns an array of PozitionControlVars when given PozitionControlPrimer for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovariantTypes
  const { HarpKey: variedType } = CovariantTypes
  const { D: lockedValue } = PitchIds
  const { C: variedValue } = PitchIds

  const expectedControlVarsList: ReadonlyArray<PozitionControlVars> = [{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.C,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.Db,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.D,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.Eb,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.E,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.F,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.Gb,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.G,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.Ab,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.A,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.Bb,
  },{
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.B,
  }]

  const actualControlVarsList = getControlVarsList({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVarsList).toEqual(expectedControlVarsList)
})

test('getControlVarsList returns an array of HarpKeyControlProps when given HarpKeyControlPrimer for a locked pozition', () => {
  const { Pozition: lockedType } = CovariantTypes
  const { RootPitch: variedType } = CovariantTypes
  const { Second: lockedValue } = PozitionIds
  const { C: variedValue } = PitchIds

  const expectedControlVarsList: ReadonlyArray<HarpKeyControlVars> = [{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.C,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.Db,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.D,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.Eb,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.E,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.F,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.Gb,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.G,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.Ab,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.A,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.Bb,
  },{
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.B,
  }]

  const actualControlVarsList = getControlVarsList({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVarsList).toEqual(expectedControlVarsList)
})

test('getControlVarsList returns an array of RootPitchControlProps when given RootPitchControlPrimer for a locked harp key', () => {
  const { HarpKey: lockedType } = CovariantTypes
  const { Pozition: variedType } = CovariantTypes
  const { F: lockedValue } = PitchIds
  const { Third: variedValue } = PozitionIds

  const expectedControlVarsList: ReadonlyArray<RootPitchControlVars> = [{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Third,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Tenth,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Fifth,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Twelfth,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Seventh,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Second,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Ninth,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Fourth,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Eleventh,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Sixth,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.First,
  },{
    harpKeyId: PitchIds.F,
    pozitionId: PozitionIds.Eighth,
  }]

  const actualControlVarsList = getControlVarsList({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVarsList).toEqual(expectedControlVarsList)
})
