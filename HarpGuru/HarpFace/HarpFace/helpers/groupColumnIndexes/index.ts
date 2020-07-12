type ColumnRange = ReadonlyArray<number>
export type ColumnRanges = ReadonlyArray<ColumnRange>

export const groupColumnIndexes = (
  hasRootArray: ReadonlyArray<boolean>
): ColumnRanges => {
  const incrementArray = Array.from(Array(hasRootArray.length).keys())

  const overlappingGroups = hasRootArray.map((hasRoot, index) => {
    if (!hasRoot && index !== 0) return []

    const endOfTrueRun = hasRootArray.indexOf(false, index)
    const nextIndex = hasRootArray.indexOf(true, endOfTrueRun)

    if (nextIndex === -1 || nextIndex === index)
      return incrementArray.slice(index)

    return incrementArray.slice(index, nextIndex)
  })

  return overlappingGroups.filter((group, index) => {
    const { length: groupLength } = group
    const isEmpty = groupLength === 0

    const { [index - 1]: previousGroup } = overlappingGroups
    const hasDuplicates =
      previousGroup && previousGroup.indexOf(group[0]) !== -1

    return !isEmpty && !hasDuplicates
  })
}
