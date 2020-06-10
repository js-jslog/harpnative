import { PitchIds } from 'harpstrata'

import { keyCHarpStrata, cHarpSecondPozHarpStrata, gHarpFirstPozHarpStrata  } from '../../testResources'
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

test('In Pitch display mode, the function returns a harpstrata with the harp key shifted to meet the root pitch requirement', () => {
  const activeHarpStrata = keyCHarpStrata
  const { G: rootPitchId } = PitchIds
  const { Pitch: activeDisplayMode } = DisplayModes

  const getNewHarpStrataProps = {
    activeHarpStrata, rootPitchId, activeDisplayMode
  }

  const expectedHarpStrata = gHarpFirstPozHarpStrata
  const actualHarpStrata = getNewHarpStrata(getNewHarpStrataProps)

  expect(actualHarpStrata).toStrictEqual(expectedHarpStrata)
})
