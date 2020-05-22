import React from 'react'
import type { ReactElement } from 'react'

import { GenericButton, UpdateCategories } from '../../GenericButton'
import type { HarpKeyButtonProps, HarpKeyButtonGenericProps } from '../../GenericButton'

export function HarpKeyButton(props: HarpKeyButtonProps): ReactElement {
  const { HarpKey: updateCategory } = UpdateCategories
  const { setActiveHarpStrata, activeHarpStrata, id } = props
  const harpKeyUpdateProps: HarpKeyButtonGenericProps = {
    setActiveHarpStrata, activeHarpStrata, id, updateCategory }
  return (
    <GenericButton {...harpKeyUpdateProps} />
  )
}
