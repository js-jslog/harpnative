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

test('Counterpart degree is identified correctly', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const activePitchIds = [ PitchIds.C ]
  const activityLegendCellPropsRoot = { activeHarpStrata, setActiveHarpStrata, itemId: PitchIds.C, activeIds: activePitchIds }
  const activityLegendCellPropsSecond = { activeHarpStrata, setActiveHarpStrata, itemId: PitchIds.D, activeIds: activePitchIds }
  const activityLegendCellPropsFlat5 = { activeHarpStrata, setActiveHarpStrata, itemId: PitchIds.Gb, activeIds: activePitchIds }

  const { counterpartDegreeId: counterpartDegreeIdRoot  } = analyseLegendKey(activityLegendCellPropsRoot)
  const { counterpartDegreeId: counterpartDegreeIdSecond  } = analyseLegendKey(activityLegendCellPropsSecond)
  const { counterpartDegreeId: counterpartDegreeIdFlat5  } = analyseLegendKey(activityLegendCellPropsFlat5)

  expect(counterpartDegreeIdRoot).toBe(DegreeIds.Root)
  expect(counterpartDegreeIdSecond).toBe(DegreeIds.Second)
  expect(counterpartDegreeIdFlat5).toBe(DegreeIds.Flat5)
})

test('Counterpart degree functionality works on degree id input by returning that input', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const activeDegreeIds = [ DegreeIds.Root ]
  const activityLegendCellPropsRoot = { activeHarpStrata, setActiveHarpStrata, itemId: DegreeIds.Root, activeIds: activeDegreeIds }
  const activityLegendCellPropsSecond = { activeHarpStrata, setActiveHarpStrata, itemId: DegreeIds.Second, activeIds: activeDegreeIds }
  const activityLegendCellPropsFlat5 = { activeHarpStrata, setActiveHarpStrata, itemId: DegreeIds.Flat5, activeIds: activeDegreeIds }

  const { counterpartDegreeId: counterpartDegreeIdRoot  } = analyseLegendKey(activityLegendCellPropsRoot)
  const { counterpartDegreeId: counterpartDegreeIdSecond  } = analyseLegendKey(activityLegendCellPropsSecond)
  const { counterpartDegreeId: counterpartDegreeIdFlat5  } = analyseLegendKey(activityLegendCellPropsFlat5)

  expect(counterpartDegreeIdRoot).toBe(DegreeIds.Root)
  expect(counterpartDegreeIdSecond).toBe(DegreeIds.Second)
  expect(counterpartDegreeIdFlat5).toBe(DegreeIds.Flat5)
})
