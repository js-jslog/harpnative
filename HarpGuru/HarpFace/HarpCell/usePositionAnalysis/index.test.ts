import { useGlobal } from 'reactn'

import type { YXCoord } from '../types'
import { inactiveCellsHarpStrata as activeHarpStrata } from '../../testResources'

import { usePositionAnalysis } from './index'

jest.mock('reactn')
const mockUseGlobal = useGlobal as jest.Mock
mockUseGlobal.mockReturnValue([activeHarpStrata])

const {
  degreeMatrix: [, , , [, , , ourDegree]],
} = activeHarpStrata
const {
  pitchMatrix: [, , , [, , , ourPitch]],
} = activeHarpStrata
const {
  isActiveComplex: {
    isActiveMatrix: [, , , [, , , ourIsActive]],
  },
} = activeHarpStrata
const {
  apparatus: {
    interactionMatrix: [, , , [, , , ourInteraction]],
  },
} = activeHarpStrata

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
