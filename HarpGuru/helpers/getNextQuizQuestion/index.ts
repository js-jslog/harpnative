import { getPitchIds } from 'harpstrata'
import type { PitchIds } from 'harpstrata'

export const getNextQuizQuestion = (previous: PitchIds):  PitchIds => {
  const pitchIds = getPitchIds()
  const max = pitchIds.length - 1
  const random = Math.floor(Math.random() * max)
  const { [random]: next } = pitchIds

  if (next === previous) return getNextQuizQuestion(previous)
  return next
}
