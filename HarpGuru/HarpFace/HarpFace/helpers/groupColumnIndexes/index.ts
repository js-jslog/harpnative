type ColumnRange = ReadonlyArray<number>
type ColumnRanges = ReadonlyArray<ColumnRange>

export const groupColumnIndexes = (hasRootArray: ReadonlyArray<boolean>): ColumnRanges => {
  const incrementArray = Array.from(Array(hasRootArray.length).keys())

  const overlappingGroups = hasRootArray.map((hasRoot, index) => {
    if (!hasRoot && index !== 0) return []

    const searchPoint = hasRootArray.indexOf(false, index)
    const nextIndex = hasRootArray.indexOf(true, searchPoint)

    if (nextIndex === -1) return incrementArray.slice(index)

    return incrementArray.slice(index, nextIndex)
  })

  return overlappingGroups.filter((group, index) => {
    const { length: groupLength } = group
    const isEmpty = groupLength === 0

    const { [index-1]: previousGroup } = overlappingGroups
    const hasDuplicates = previousGroup && previousGroup.indexOf(group[0]) !== -1

    return !isEmpty && !hasDuplicates
  })
}
