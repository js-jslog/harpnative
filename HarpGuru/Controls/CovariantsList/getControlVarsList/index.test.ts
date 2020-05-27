import { PitchIds, PozitionIds } from 'harpstrata'

import { CovariantTypes } from '../types'

import { getControlVarsList } from './index'

test('getControlVarsList returns an array of control variables', () => {
  const { HarpKey: lockedType } = CovariantTypes
  const { C: lockedValue } = PitchIds
  const { RootPitch: variableType } = CovariantTypes

  const expectedControlVarsList = [{
    harpKeyId: PitchIds.C,
    rootPitchId: PitchIds.C,
  }]

  const actualControlVarsList = getControlVarsList({lockedType, lockedValue, variableType})

  expect(actualControlVarsList).toEqual(expectedControlVarsList)
})
