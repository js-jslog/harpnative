import { transposeMatrix } from './index'

test('transposes a sinlge row to a column', () => {
  const singleRow = [[ 1, 2, 3, 4, 5, 6 ]]
  const expectedTransposition = [[1], [2], [3], [4], [5], [6]]

  expect(transposeMatrix(singleRow)).toStrictEqual(expectedTransposition)
})
