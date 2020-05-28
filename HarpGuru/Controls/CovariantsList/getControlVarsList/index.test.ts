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
