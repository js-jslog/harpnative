import { exampleHarpFaceProps } from '../../HarpFace'

import { isBlowOrDrawRow } from './index'

test('isBlowOrDrawRow returns true for a blow row', () => {
  const harpRowPropsBlow = { ...exampleHarpFaceProps, yCoord: 2 }
  
  expect(isBlowOrDrawRow(harpRowPropsBlow)).toBeTruthy()
})
