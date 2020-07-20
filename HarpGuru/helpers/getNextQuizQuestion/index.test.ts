import { PitchIds } from 'harpstrata'

import { getNextQuizQuestion } from './index'

// The purpose of running the same test multiple times is to try and
// account for the randomness inherent in the function. It could avoid
// producing an output identical to the input just by chance, but doing
// so over this many tests is extremely unlikely.
test('that a different pitch question is chosen from the previous one', () => {
  const { A: previousQuizQuestion } = PitchIds

  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
  expect(getNextQuizQuestion).not.toBe(previousQuizQuestion)
})
