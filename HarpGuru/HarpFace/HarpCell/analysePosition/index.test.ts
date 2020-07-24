import type { YXCoord } from '../types'
import { inactiveCellsHarpStrata as activeHarpStrata } from '../../testResources'

import { analysePosition } from './index'

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

test('leftmost is true if the provided coord has is 0 in the x axis and false otherwise', () => {
  const yxCoordLeftmostTrue: YXCoord = [0, 0]
  const yxCoordLeftmostFalse: YXCoord = [0, 1]
  const { leftmost: leftmostTrue } = analysePosition({
    activeHarpStrata,
    yxCoord: yxCoordLeftmostTrue,
  })
  const { leftmost: leftmostFalse } = analysePosition({
    activeHarpStrata,
    yxCoord: yxCoordLeftmostFalse,
  })
  expect(leftmostTrue).toBeTruthy()
  expect(leftmostFalse).toBeFalsy()
})

test('thisDegree, thisPitch, thisInteraction, & thisIsActive provide the degree, pitch, interaction and isActive at this position', () => {
  const ourCoord: YXCoord = [3, 3]
  const {
    thisDegree,
    thisPitch,
    thisInteraction,
    thisIsActive,
  } = analysePosition({ activeHarpStrata, yxCoord: ourCoord })
  expect(thisDegree).toBe(ourDegree)
  expect(thisPitch).toBe(ourPitch)
  expect(thisInteraction).toBe(ourInteraction)
  expect(thisIsActive).toBe(ourIsActive)
})
