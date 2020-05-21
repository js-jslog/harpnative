import { PitchIds } from 'harpstrata'

import { UpdateCategories } from '../types'
import type { GenericUpdateProps } from '../types'
import { keyCHarpStrata } from '../testResources'

import { getActiveIdForUpdateCategory } from './index'

test('getActiveIdForUpdateCategory returns the active harpkey when expected', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { HarpKey: updateCategory } = UpdateCategories
  const { D: updateId } = PitchIds

  const harpKeyUpdateProps: GenericUpdateProps = {
    activeHarpStrata, setActiveHarpStrata, updateCategory, updateId
  }

  const activeId = getActiveIdForUpdateCategory(harpKeyUpdateProps)

  expect(activeId).toBe(PitchIds.C)
})
