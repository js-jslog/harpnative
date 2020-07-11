type Row<T> = ReadonlyArray<T>
type Matrix<T> = ReadonlyArray<Row<T>>

export const transposeMatrix = <T>(matrix: Matrix<T>): Matrix<T> => {
  if (matrix.length === 1 && matrix[0].length === 0) return [[]]

  return matrix[0].map((_, index) => matrix.map(element => element[index]))
}
