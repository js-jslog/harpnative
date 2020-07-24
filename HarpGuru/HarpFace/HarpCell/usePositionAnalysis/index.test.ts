import { useGlobal } from 'reactn'
import type { Degree, IsActiveIds, Pitch, Interaction } from 'harpstrata'

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
const {
  apparatus: {
    interactionMatrix: [, , , [, , , y3x3Interaction]],
  },
} = activeHarpStrata

const ourDegree = <Degree>y3x3Degree
const ourPitch = <Pitch>y3x3Pitch
const ourIsActive = <IsActiveIds>y3x3IsActive
const ourInteraction = <Interaction>y3x3Interaction

test('thisDegree, thisPitch, thisInteraction, & thisIsActive provide the degree, pitch, interaction and isActive at this position', () => {
  const ourCoord: YXCoord = [3, 3]
  const {
    thisDegree,
    thisPitch,
    thisInteraction,
    thisIsActive,
  } = usePositionAnalysis(ourCoord)
  expect(thisDegree).toBe(ourDegree)
  expect(thisPitch).toBe(ourPitch)
  expect(thisInteraction).toBe(ourInteraction)
  expect(thisIsActive).toBe(ourIsActive)
})

test('thisDegreeId returns an id when available and undefined otherwise', () => {
  const ourCoord: YXCoord = [3, 3]
  const {
    thisDegreeId,
    thisPitchId,
  } = usePositionAnalysis(ourCoord)
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
