import { DegreeIds, PitchIds } from 'harpstrata'

import { analyseLegendKey } from './index'

test('Key is recognised as active if it appears in either active list', () => {
  const { Root: degreeItemId } = DegreeIds
  const { C: pitchItemId } = PitchIds
  const activeDegreeIds = [ DegreeIds.Root ]
  const activePitchIds = [ PitchIds.C ]
  const activityLegendCellPropsDegree = { itemId: degreeItemId, activeIds: activeDegreeIds }
  const activityLegendCellPropsPitch = { itemId: pitchItemId, activeIds: activePitchIds }

  const { isActive: isActiveDegree } = analyseLegendKey(activityLegendCellPropsDegree)
  const { isActive: isActivePitch } = analyseLegendKey(activityLegendCellPropsPitch)

  expect(isActiveDegree).toBeTruthy()
  expect(isActivePitch).toBeTruthy()
})
