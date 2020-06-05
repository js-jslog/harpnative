import { PitchIds, PozitionIds } from 'harpstrata'
import type { RootPitchControllers } from 'harpstrata'

import { CovarianceParts } from '../types'

import { getRootPitchControllers } from './index'

test('getRootPitchControllers returns a RootPitchControllers for a locked harp key', () => {
  const { HarpKey: lockedType } = CovarianceParts
  const { Pozition: variedType } = CovarianceParts
  const { D: lockedValue } = PitchIds
  const { Second: variedValue } = PozitionIds

  const expectedControlVars: RootPitchControllers = {
    harpKeyId: PitchIds.D,
    pozitionId: PozitionIds.Second,
  }

  const actualControlVars = getRootPitchControllers({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})

test('getRootPitchControllers returns a RootPitchControllers for a locked root pitch', () => {
  const { Pozition: lockedType } = CovarianceParts
  const { HarpKey: variedType } = CovarianceParts
  const { Eighth: lockedValue } = PozitionIds
  const { A: variedValue } = PitchIds

  const expectedControlVars: RootPitchControllers = {
    harpKeyId: PitchIds.A,
    pozitionId: PozitionIds.Eighth,
  }

  const actualControlVars = getRootPitchControllers({lockedType, variedType, lockedValue, variedValue})

  expect(actualControlVars).toEqual(expectedControlVars)
})
