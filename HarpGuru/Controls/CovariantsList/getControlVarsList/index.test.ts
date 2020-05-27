import { PitchIds } from 'harpstrata'
import type { PozitionControlVars } from 'harpstrata'

import { CovariantTypes } from '../types'

import { getControlVarsList } from './index'

test('getControlVarsList returns an array of PozitionControlVars for a locked harp key', () => {
  const { HarpKey: lockedType } = CovariantTypes
  const { C: lockedValue } = PitchIds
  const { RootPitch: variableType } = CovariantTypes

  const expectedControlVarsList: ReadonlyArray<PozitionControlVars> = [{
    harpKeyId: PitchIds.C,
    rootPitchId: PitchIds.C,
  }]

  const actualControlVarsList = getControlVarsList({lockedType, lockedValue, variableType})

  expect(actualControlVarsList).toEqual(expectedControlVarsList)
})

test('getControlVarsList returns an array of PozitionControlVars for a locked root pitch', () => {
  const { RootPitch: lockedType } = CovariantTypes
  const { C: lockedValue } = PitchIds
  const { HarpKey: variableType } = CovariantTypes

  const expectedControlVarsList: ReadonlyArray<PozitionControlVars> = [{
    harpKeyId: PitchIds.C,
    rootPitchId: PitchIds.C,
  }]

  const actualControlVarsList = getControlVarsList({lockedType, lockedValue, variableType})

  expect(actualControlVarsList).toEqual(expectedControlVarsList)
})
