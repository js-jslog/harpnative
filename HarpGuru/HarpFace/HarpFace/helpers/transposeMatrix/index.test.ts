import { transposeMatrix } from './index'

test('transposes a sinlge row to a column and back again', () => {
  const singleRow = [[ 1, 2, 3, 4, 5, 6 ]]
  const expectedTransposition = [[1], [2], [3], [4], [5], [6]]
  const actualTransposition = transposeMatrix(singleRow)

  expect(actualTransposition).toStrictEqual(expectedTransposition)
  expect(transposeMatrix(actualTransposition)).toStrictEqual(singleRow)
})
