import { PozitionIds, PitchIds } from 'harpstrata'

import { keyCHarpStrata } from '../testResources'
import { getPropsForHarpStrata } from '../getPropsForHarpStrata'

import { getUpdateHarpStrataProps } from './index'
import type { GenericUpdateProps } from './index'

test('getUpdateHarpStrataProps provides amended HarpStrataProps for a given Pozition update', () => {
  const sourceHarpStrata = keyCHarpStrata

  const baseHarpStrataProps = getPropsForHarpStrata(sourceHarpStrata)

  const expectedHarpStrataProps = { ...baseHarpStrataProps, pozitionId: PozitionIds.Third }

  const POZITION: 'POZITION' = 'POZITION'
  const pozitionUpdateProps: GenericUpdateProps = {
    activeHarpStrata: keyCHarpStrata,
    updateCategory: POZITION,
    updateId: PozitionIds.Third,
  }
  const actualHarpStrataProps = getUpdateHarpStrataProps(pozitionUpdateProps)

  expect(actualHarpStrataProps).toStrictEqual(expectedHarpStrataProps)
})

test('getUpdateHarpStrataProps provides amended HarpStrataProps for a given Harp Key update', () => {
  const sourceHarpStrata = keyCHarpStrata

  const baseHarpStrataProps = getPropsForHarpStrata(sourceHarpStrata)

  const expectedHarpStrataProps = { ...baseHarpStrataProps, harpKeyId: PitchIds.D }

  const HARP_KEY: 'HARP_KEY' = 'HARP_KEY'
  const harpKeyUpdateProps: GenericUpdateProps = {
    activeHarpStrata: keyCHarpStrata,
    updateCategory: HARP_KEY,
    updateId: PitchIds.D,
  }
  const actualHarpStrataProps = getUpdateHarpStrataProps(harpKeyUpdateProps)

  expect(actualHarpStrataProps).toStrictEqual(expectedHarpStrataProps)
})
