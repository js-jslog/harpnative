import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars } from 'harpstrata'

import { CovariantTypes } from '../../types'

import { getControlVarsArray } from './index'

test('given a ui covariant control definition, an array of the possible covariant control vars is produced', () => {
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
