type ColumnRange = ReadonlyArray<number>
type ColumnRanges = ReadonlyArray<ColumnRange>

export const groupColumnIndexes = (hasRootArray: ReadonlyArray<boolean>): ColumnRanges => {
  const incrementArray = Array.from(Array(hasRootArray.length).keys())
  const mapped = hasRootArray.map((element, index) => {
    if (!element && index !== 0) return []

    const nextIndex = hasRootArray.indexOf(true, index+1)

    if (nextIndex === -1) return incrementArray.slice(index)

    return incrementArray.slice(index, nextIndex)
  })

  return mapped.filter(element => element.length > 0)
}
