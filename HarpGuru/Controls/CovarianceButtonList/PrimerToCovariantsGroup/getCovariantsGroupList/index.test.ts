import { PitchIds, PozitionIds } from 'harpstrata'
import type { CovariantsGroup } from 'harpstrata'

import { ControlVarsPrimer } from '../types'
import { CovariantTypes } from '../../types'

import { getCovariantsGroupList } from './index'

test('getCovariantsGroupList returns a single entry representing the first CovariantsGroup in the list', () => {
  const controlVarsPrimer: ControlVarsPrimer = {
    lockedType: CovariantTypes.HarpKey,
    variedType: CovariantTypes.Pozition,
    lockedValue: PitchIds.C,
    variedValue: PozitionIds.First,
  }

  const expectedCovariantsGroupList: ReadonlyArray<CovariantsGroup> = [{
    harpKeyId: PitchIds.C,
    pozitionId: PozitionIds.First,
    rootPitchId: PitchIds.C,
  }]

  const actualCovariantsGroupList = getCovariantsGroupList(controlVarsPrimer)

  expect(actualCovariantsGroupList).toStrictEqual(expectedCovariantsGroupList)
})
