import { PitchIds, PozitionIds } from 'harpstrata'
import type { CovariantSet } from 'harpstrata'

import { ControlVarsPrimer, CovarianceParts } from '../types'

import { getCovariantsGroupList } from './index'

test('getCovariantsGroupList returns a complete mapping of the control covariants to the dependent covariant', () => {
  const controlVarsPrimer: ControlVarsPrimer = {
    lockedType: CovarianceParts.Pozition,
    variedType: CovarianceParts.HarpKey,
    lockedValue: PozitionIds.First,
    variedValue: PitchIds.C,
  }

  const expectedCovariantsGroupList: ReadonlyArray<CovariantSet> = [
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

test('getCovariantsGroupList returns a complete mapping of the control covariants to the dependent covariant', () => {
  const controlVarsPrimer: ControlVarsPrimer = {
    lockedType: CovarianceParts.RootPitch,
    variedType: CovarianceParts.HarpKey,
    lockedValue: PitchIds.G,
    variedValue: PitchIds.G,
  }

  const expectedCovariantGroupsIncludes= [
    {
      harpKeyId: PitchIds.G,
      pozitionId: PozitionIds.First,
      rootPitchId: PitchIds.G,
    }, {
      harpKeyId: PitchIds.C,
      pozitionId: PozitionIds.Second,
      rootPitchId: PitchIds.G,
    }
  ]

  const actualCovariantsGroupList = getCovariantsGroupList(controlVarsPrimer)

  expect(actualCovariantsGroupList).toEqual(expect.arrayContaining(expectedCovariantGroupsIncludes))
})
