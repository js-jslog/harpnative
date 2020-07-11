type ColumnRange = ReadonlyArray<number>
type ColumnRanges = ReadonlyArray<ColumnRange>

export const groupColumnIndexes = (hasRootArray: ReadonlyArray<boolean>): ColumnRanges => {
  const incrementArray = Array.from(Array(hasRootArray.length).keys())
  const mapped = hasRootArray.map((element, index) => {
    if (!element && index !== 0) return []

    const indexOffset = (element ? 2 : 1)
    const nextIndex = hasRootArray.indexOf(true, index + indexOffset)

    if (nextIndex === -1) return incrementArray.slice(index)

    return incrementArray.slice(index, nextIndex)
  })

  const filtered = mapped.filter((element, index, array) => {
    const { length: groupLength } = element
    const isEmpty = groupLength === 0
    const duplicateEntries = index > 0 && array[index-1].indexOf(element[0]) !== -1

    return !isEmpty && !duplicateEntries
  })

  return filtered
}
