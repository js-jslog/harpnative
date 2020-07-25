import { setGlobal } from 'reactn'
import {
  getHarpStrata,
  getApparatusIds,
  getPozitionIds,
  getPitchIds,
  PitchIds,
} from 'harpstrata'
import type { ActiveIds, HarpStrataProps, HarpStrata } from 'harpstrata'

import { DisplayModes, ExperienceModes } from '../../types'
import { getNextQuizQuestion } from '../../helpers'

import { espyGlobalTuple } from './state-informant'

export const setGlobalState = (): void => {
  const { globalTuple } = espyGlobalTuple()
  if (globalTuple[0].activeHarpStrata !== undefined) return

  const [initialApparatusId] = getApparatusIds()
  const [initialPozitionId] = getPozitionIds()
  const [initialPitchId] = getPitchIds()
  const initialActiveIds: ActiveIds = []

  const initialHarpStrataProps: HarpStrataProps = {
    apparatusId: initialApparatusId,
    pozitionId: initialPozitionId,
    harpKeyId: initialPitchId,
    activeIds: initialActiveIds,
  }
  const initialHarpStrata: HarpStrata = getHarpStrata(initialHarpStrataProps)
  const { Explore: initialExperienceMode } = ExperienceModes
  const { Degree: initialDisplayMode } = DisplayModes

  const state = {
    activeHarpStrata: initialHarpStrata,
    quizQuestion: getNextQuizQuestion(PitchIds.A, initialDisplayMode),
    activeExperienceMode: initialExperienceMode,
    activeDisplayMode: initialDisplayMode,
  }
  setGlobal(state)
}
