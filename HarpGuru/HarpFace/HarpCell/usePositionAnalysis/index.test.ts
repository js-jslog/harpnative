import { useGlobal } from 'reactn'
import type { Degree, IsActiveIds, Pitch } from 'harpstrata'

import type { YXCoord } from '../types'
import { inactiveCellsHarpStrata as activeHarpStrata } from '../../testResources'

import { usePositionAnalysis } from './index'

jest.mock('reactn')
const mockUseGlobal = useGlobal as jest.Mock
mockUseGlobal.mockReturnValue([activeHarpStrata])

const {
  degreeMatrix: [, , , [, , , y3x3Degree]],
} = activeHarpStrata
const {
  pitchMatrix: [, , , [, , , y3x3Pitch]],
} = activeHarpStrata
const {
  isActiveComplex: {
    isActiveMatrix: [, , , [, , , y3x3IsActive]],
  },
} = activeHarpStrata

const ourDegree = <Degree>y3x3Degree
const ourPitch = <Pitch>y3x3Pitch
const ourIsActive = <IsActiveIds>y3x3IsActive

test('thisIsActive provide the isActive at this position', () => {
  const ourCoord: YXCoord = [3, 3]
  const { thisIsActive } = usePositionAnalysis(ourCoord)
  expect(thisIsActive).toBe(ourIsActive)
})

test('thisDegreeId returns an id when available and undefined otherwise', () => {
  const ourCoord: YXCoord = [3, 3]
  const { thisDegreeId, thisPitchId } = usePositionAnalysis(ourCoord)
  expect(ourDegree).not.toBe(undefined)
  expect(ourDegree.id).toBeTruthy()
  expect(thisDegreeId).toBe(ourDegree.id)
  expect(thisPitchId).toBe(ourPitch.id)

  const emptyCoord: YXCoord = [0, 0]
  const {
    thisDegreeId: undefinedDegreeId,
    thisPitchId: undefinedPitchId,
  } = usePositionAnalysis(emptyCoord)
  expect(undefinedDegreeId).toBe(undefined)
  expect(undefinedPitchId).toBe(undefined)
})
