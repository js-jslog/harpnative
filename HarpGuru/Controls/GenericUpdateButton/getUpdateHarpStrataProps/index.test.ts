import { PozitionIds, PitchIds } from 'harpstrata'

import { UpdateCategories } from '../types'
import type { GenericUpdateProps } from '../types'
import { firstPozitionHarpStrata, keyCHarpStrata } from '../testResources'
import { getPropsForHarpStrata } from '../getPropsForHarpStrata'

import { getUpdateHarpStrataProps } from './index'

test('getUpdateHarpStrataProps provides amended HarpStrataProps for a given Pozition update', () => {
  const sourceHarpStrata = firstPozitionHarpStrata

  const baseHarpStrataProps = getPropsForHarpStrata(sourceHarpStrata)

  const expectedHarpStrataProps = { ...baseHarpStrataProps, pozitionId: PozitionIds.Third }

  const { Pozition: updateCategory } = UpdateCategories
  const pozitionUpdateProps: GenericUpdateProps = {
    activeHarpStrata: keyCHarpStrata,
    setActiveHarpStrata: jest.fn(),
    updateCategory,
    updateId: PozitionIds.Third,
  }
  const actualHarpStrataProps = getUpdateHarpStrataProps(pozitionUpdateProps)

  expect(actualHarpStrataProps).toStrictEqual(expectedHarpStrataProps)
})

test('getUpdateHarpStrataProps provides amended HarpStrataProps for a given Harp Key update', () => {
  const sourceHarpStrata = keyCHarpStrata

  const baseHarpStrataProps = getPropsForHarpStrata(sourceHarpStrata)

  const expectedHarpStrataProps = { ...baseHarpStrataProps, harpKeyId: PitchIds.D }

  const { HarpKey: updateCategory } = UpdateCategories
  const harpKeyUpdateProps: GenericUpdateProps = {
    activeHarpStrata: keyCHarpStrata,
    setActiveHarpStrata: jest.fn(),
    updateCategory,
    updateId: PitchIds.D,
  }
  const actualHarpStrataProps = getUpdateHarpStrataProps(harpKeyUpdateProps)

  expect(actualHarpStrataProps).toStrictEqual(expectedHarpStrataProps)
})
