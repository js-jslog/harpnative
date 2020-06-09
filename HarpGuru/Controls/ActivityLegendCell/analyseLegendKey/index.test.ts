import { DegreeIds, PitchIds } from 'harpstrata'

import { keyCHarpStrata } from '../../testResources'
import { DisplayModes } from '../../../HarpFace'

import { analyseLegendKey } from './index'


test('Key is recognised as active if it appears in either active list', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Root: degreeItemId } = DegreeIds
  const { C: pitchItemId } = PitchIds
  const activeDegreeIds = [ DegreeIds.Root ]
  const activePitchIds = [ PitchIds.C ]
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendCellPropsDegree = {
    activeHarpStrata, setActiveHarpStrata,
    itemId: degreeItemId, activeIds: activeDegreeIds,
    activeDisplayMode
  }
  const activityLegendCellPropsPitch = {
    activeHarpStrata, setActiveHarpStrata,
    itemId: pitchItemId, activeIds: activePitchIds,
    activeDisplayMode
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
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendCellPropsRoot = { activeHarpStrata, setActiveHarpStrata, itemId: PitchIds.C, activeIds: activePitchIds, activeDisplayMode }
  const activityLegendCellPropsSecond = { activeHarpStrata, setActiveHarpStrata, itemId: PitchIds.D, activeIds: activePitchIds, activeDisplayMode }
  const activityLegendCellPropsFlat5 = { activeHarpStrata, setActiveHarpStrata, itemId: PitchIds.Gb, activeIds: activePitchIds, activeDisplayMode }

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
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendCellPropsRoot = { activeHarpStrata, setActiveHarpStrata, itemId: DegreeIds.Root, activeIds: activeDegreeIds, activeDisplayMode }
  const activityLegendCellPropsSecond = { activeHarpStrata, setActiveHarpStrata, itemId: DegreeIds.Second, activeIds: activeDegreeIds, activeDisplayMode }
  const activityLegendCellPropsFlat5 = { activeHarpStrata, setActiveHarpStrata, itemId: DegreeIds.Flat5, activeIds: activeDegreeIds, activeDisplayMode }

  const { counterpartDegreeId: counterpartDegreeIdRoot  } = analyseLegendKey(activityLegendCellPropsRoot)
  const { counterpartDegreeId: counterpartDegreeIdSecond  } = analyseLegendKey(activityLegendCellPropsSecond)
  const { counterpartDegreeId: counterpartDegreeIdFlat5  } = analyseLegendKey(activityLegendCellPropsFlat5)

  expect(counterpartDegreeIdRoot).toBe(DegreeIds.Root)
  expect(counterpartDegreeIdSecond).toBe(DegreeIds.Second)
  expect(counterpartDegreeIdFlat5).toBe(DegreeIds.Flat5)
})
