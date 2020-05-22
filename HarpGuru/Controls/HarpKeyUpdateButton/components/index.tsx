import React from 'react'
import type { ReactElement } from 'react'

import type { HarpKeyUpdateButtonProps } from '../types'
import { GenericUpdateButton, UpdateCategories } from '../../GenericUpdateButton'
import type { HarpKeyButtonGenericProps } from '../../GenericUpdateButton'

export function HarpKeyUpdateButton(props: HarpKeyUpdateButtonProps): ReactElement {
  const { HarpKey: updateCategory } = UpdateCategories
  const { setActiveHarpStrata, activeHarpStrata, id } = props
  const harpKeyUpdateProps: HarpKeyButtonGenericProps = {
    setActiveHarpStrata, activeHarpStrata, id, updateCategory }
  return (
    <GenericUpdateButton {...harpKeyUpdateProps} />
  )
}
