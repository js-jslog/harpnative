import React from 'react'
import type { ReactElement } from 'react'

import type { HarpKeyUpdateButtonProps } from '../types'
import { GenericUpdateButton, UpdateCategories } from '../../GenericUpdateButton'
import type { HarpKeyUpdateProps } from '../../GenericUpdateButton'

export function HarpKeyUpdateButton(props: HarpKeyUpdateButtonProps): ReactElement {
  const { HarpKey: updateCategory } = UpdateCategories
  const { setActiveHarpStrata, activeHarpStrata, id: updateId } = props
  const harpKeyUpdateProps: HarpKeyUpdateProps = {
    setActiveHarpStrata, activeHarpStrata, updateId, updateCategory }
  return (
    <GenericUpdateButton {...harpKeyUpdateProps} />
  )
}
