import { PitchIds } from 'harpstrata'

import { keyCHarpStrata, cHarpSecondPozHarpStrata } from '../../testResources'
import { DisplayModes } from '../../../HarpFace'

import { getNewHarpStrata } from './index'

test('In Degree display mode, the function returns a harpstrata with the pozition shifted to meet the root pitch requirement', () => {
  const activeHarpStrata = keyCHarpStrata
  const { G: rootPitchId } = PitchIds
  const { Degree: activeDisplayMode } = DisplayModes

  const getNewHarpStrataProps = {
    activeHarpStrata, rootPitchId, activeDisplayMode
  }

  const expectedHarpStrata = cHarpSecondPozHarpStrata
  const actualHarpStrata = getNewHarpStrata(getNewHarpStrataProps)

  expect(actualHarpStrata).toStrictEqual(expectedHarpStrata)
})
