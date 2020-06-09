import { DegreeIds, PitchIds } from 'harpstrata'

import { keyCHarpStrata } from '../../testResources'

import { analyseLegendKey } from './index'


test('Key is recognised as active if it appears in either active list', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Root: degreeItemId } = DegreeIds
  const { C: pitchItemId } = PitchIds
  const activeDegreeIds = [ DegreeIds.Root ]
  const activePitchIds = [ PitchIds.C ]
  const activityLegendCellPropsDegree = {
    activeHarpStrata, setActiveHarpStrata,
    itemId: degreeItemId, activeIds: activeDegreeIds
  }
  const activityLegendCellPropsPitch = {
    activeHarpStrata, setActiveHarpStrata,
    itemId: pitchItemId, activeIds: activePitchIds
  }

  const { isActive: isActiveDegree } = analyseLegendKey(activityLegendCellPropsDegree)
  const { isActive: isActivePitch } = analyseLegendKey(activityLegendCellPropsPitch)

  expect(isActiveDegree).toBeTruthy()
  expect(isActivePitch).toBeTruthy()
})

//test('Counterpart degree is identified correctly', () => {
//  const activePitchIds = [ PitchIds.C ]
//  const activityLegendCellPropsRoot = { itemId: PitchIds.C, activeIds: activePitchIds }
//  const activityLegendCellPropsSecond = { itemId: PitchIds.D, activeIds: activePitchIds }
//  const activityLegendCellPropsFlat5 = { itemId: PitchIds.Gb, activeIds: activePitchIds }
//
//  const { counterpartDegree: counterpartDegreeRoot  } = analyseLegendKey(activityLegendCellPropsRoot)
//  const { counterpartDegree: counterpartDegreeSecond  } = analyseLegendKey(activityLegendCellPropsSecond)
//  const { counterpartDegree: counterpartDegreeFlat5  } = analyseLegendKey(activityLegendCellPropsFlat5)
//
//  expect(counterpartDegreeRoot).toBe(DegreeIds.Root)
//  expect(counterpartDegreeSecond).toBe(DegreeIds.Second)
//  expect(counterpartDegreeFlat5).toBe(DegreeIds.Flat5)
//})
