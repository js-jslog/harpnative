type Row<T> = ReadonlyArray<T>
type Matrix<T> = ReadonlyArray<Row<T>>

export const transposeMatrix = <T>(matrix: Matrix<T>): Matrix<T> => matrix[0].map(
  (_, index) => matrix.map(element => element[index])
)
