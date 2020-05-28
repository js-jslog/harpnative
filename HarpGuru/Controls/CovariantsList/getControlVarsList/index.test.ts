import { PitchIds } from 'harpstrata'
import type { PozitionControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

import { getControlVarsList } from './index'

test('getControlVarsList returns an array of PozitionControlVars when given PozitionControlPrimer for a locked harp key', () => {
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
