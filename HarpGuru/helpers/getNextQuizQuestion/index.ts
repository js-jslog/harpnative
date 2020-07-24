import { getPitchIds } from 'harpstrata'
import type { PitchIds, DegreeIds } from 'harpstrata'

import type { DisplayModes } from '../../types'

export const getNextQuizQuestion = (
  previous: PitchIds | DegreeIds,
  displayMode: DisplayModes
): PitchIds | DegreeIds => {
  const pitchIds = getPitchIds()
  const max = pitchIds.length - 1
  const random = Math.floor(Math.random() * max)
  const { [random]: next } = pitchIds

  if (next === previous) return getNextQuizQuestion(previous, displayMode)
  return next
}
