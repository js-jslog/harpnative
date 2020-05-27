import { PitchIds, PozitionIds } from 'harpstrata'

import { getCovariantMap } from './index'

test('getCovariantMap returns a single element covariant group array', () => {
  const { C: lockedValue } = PitchIds
  const variableValues = [ PitchIds.C ]

  const expectedCovariantMap = [{
    harpKeyId: PitchIds.C,
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.C,
  }]

  const actualCovariantMap = getCovariantMap({lockedValue, variableValues})

  expect(actualCovariantMap).toEqual(expectedCovariantMap)
})
