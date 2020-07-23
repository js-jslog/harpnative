import { State } from 'reactn/default'
import { setGlobal } from 'reactn'
import {
  getApparatusIds,
  getPozitionIds,
  getPitchIds,
  ActiveIds,
  PitchIds,
  HarpStrataProps,
  HarpStrata,
  getHarpStrata,
} from 'harpstrata'
import { act } from '@testing-library/react-native'

import { setup } from './testSetup'

import { setGlobalReactNState } from './index'

const [initialApparatusId] = getApparatusIds()
const [initialPozitionId] = getPozitionIds()
const [initialPitchId] = getPitchIds()
const initialActiveIds: ActiveIds = [PitchIds.A]

const differentHarpStrataProps: HarpStrataProps = {
  apparatusId: initialApparatusId,
  pozitionId: initialPozitionId,
  harpKeyId: initialPitchId,
  activeIds: initialActiveIds,
}
const differentHarpStrata: HarpStrata = getHarpStrata(differentHarpStrataProps)

test('that the global state is defined', () => {
  setGlobalReactNState()
  const { globalTuple } = setup()
  const [global] = globalTuple
  expect(global.activeHarpStrata.isActiveComplex.activePitchIds.length).toBe(0)
})

test('that the global state is not redefined if it already exists', () => {
  const blankState = { activeHarpStrata: differentHarpStrata } as State
  act(() => {
    setGlobal(blankState)
  })
  setGlobalReactNState()
  const { globalTuple } = setup()
  const [global] = globalTuple
  expect(global.activeHarpStrata.isActiveComplex.activePitchIds.length).toBe(1)
})
