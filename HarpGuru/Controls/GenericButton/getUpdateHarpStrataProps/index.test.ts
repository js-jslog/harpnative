import { PozitionIds } from 'harpstrata'

import { keyCHarpStrata } from '../testResources'
import { getPropsForHarpStrata } from '../getPropsForHarpStrata'

import { getUpdateHarpStrataProps } from './index'

test('getUpdateHarpStrataProps provides amended HarpStrataProps for a given Pozition update', () => {
  const sourceHarpStrata = keyCHarpStrata

  const baseHarpStrataProps = getPropsForHarpStrata(sourceHarpStrata)

  const expectedHarpStrataProps = { ...baseHarpStrataProps, pozitionId: PozitionIds.Third }

  const POZITION: 'POZITION' = 'POZITION'
  const pozitionUpdateProps = {
    activeHarpStrata: keyCHarpStrata,
    updateCategory: POZITION,
    updateId: PozitionIds.Third,
  }
  const actualHarpStrataProps = getUpdateHarpStrataProps(pozitionUpdateProps)

  expect(actualHarpStrataProps).toStrictEqual(expectedHarpStrataProps)
})
