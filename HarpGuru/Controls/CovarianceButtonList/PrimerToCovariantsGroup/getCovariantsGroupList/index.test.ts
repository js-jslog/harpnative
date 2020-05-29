import { PitchIds, PozitionIds } from 'harpstrata'
import type { CovariantsGroup } from 'harpstrata'

import { ControlVarsPrimer } from '../types'
import { CovariantTypes } from '../../types'

import { getCovariantsGroupList } from './index'

test('getCovariantsGroupList returns a single entry representing the first CovariantsGroup in the list', () => {
  const controlVarsPrimer: ControlVarsPrimer = {
    lockedType: CovariantTypes.Pozition,
    variedType: CovariantTypes.HarpKey,
    lockedValue: PozitionIds.First,
    variedValue: PitchIds.C,
  }

  const expectedCovariantsGroupList: ReadonlyArray<CovariantsGroup> = [
    {
      harpKeyId: PitchIds.C,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.C,
    },
    {
      harpKeyId: PitchIds.Db,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.Db,
    },
    {
      harpKeyId: PitchIds.D,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.D,
    },
    {
      harpKeyId: PitchIds.Eb,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.Eb,
    },
    {
      harpKeyId: PitchIds.E,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.E,
    },
    {
      harpKeyId: PitchIds.F,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.F,
    },
    {
      harpKeyId: PitchIds.Gb,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.Gb,
    },
    {
      harpKeyId: PitchIds.G,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.G,
    },
    {
      harpKeyId: PitchIds.Ab,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.Ab,
    },
    {
      harpKeyId: PitchIds.A,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.A,
    },
    {
      harpKeyId: PitchIds.Bb,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.Bb,
    },
    {
      harpKeyId: PitchIds.B,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.B,
    },
  ]

  const actualCovariantsGroupList = getCovariantsGroupList(controlVarsPrimer)

  expect(actualCovariantsGroupList).toStrictEqual(expectedCovariantsGroupList)
})
