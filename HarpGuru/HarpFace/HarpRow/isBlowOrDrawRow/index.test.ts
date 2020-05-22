import { exampleHarpFaceProps } from '../../HarpFace'

import { isBlowOrDrawRow } from './index'

test('isBlowOrDrawRow returns true for a blow or draw row and false otherwise', () => {
  const harpRowPropsBlow = { ...exampleHarpFaceProps, yCoord: 2 }
  const harpRowPropsDraw = { ...exampleHarpFaceProps, yCoord: 3 }
  const harpRowPropsBend = { ...exampleHarpFaceProps, yCoord: 4 }
  
  expect(isBlowOrDrawRow(harpRowPropsBlow)).toBeTruthy()
  expect(isBlowOrDrawRow(harpRowPropsDraw)).toBeTruthy()
  expect(isBlowOrDrawRow(harpRowPropsBend)).toBeFalsy()
})
