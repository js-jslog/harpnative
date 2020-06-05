import { PitchIds, PozitionIds } from 'harpstrata'
import type { CovariantSet } from 'harpstrata'

import { CovariancePrimer, CovarianceParts } from '../types'

import { getCovarianceSeries } from './index'

test('getCovarianceSeries returns a complete series of CovariantSet\'s for an origin primer', () => {
  const covarianceOriginPrimer: CovariancePrimer = {
    lockedType: CovarianceParts.Pozition,
    variedType: CovarianceParts.HarpKey,
    lockedValue: PozitionIds.First,
    variedValue: PitchIds.C,
  }

  const expectedCovarianceSeries: ReadonlyArray<CovariantSet> = [
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

  const actualCovarianceSeries = getCovarianceSeries(covarianceOriginPrimer)

  expect(actualCovarianceSeries).toStrictEqual(expectedCovarianceSeries)
})

test('getCovarianceSeries returns a complete series of CovariantSet\'s for a different origin primer', () => {
  const covarianceOriginPrimer: CovariancePrimer = {
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

  const actualCovarianceSeries = getCovarianceSeries(covarianceOriginPrimer)

  expect(actualCovarianceSeries).toEqual(expect.arrayContaining(expectedCovariantGroupsIncludes))
})
