import { PitchIds, getPitchIds } from 'harpstrata'
import type { CovariantControlVars } from 'harpstrata'

import { getControlVars } from '../PrimerToCovariantsGroup'
import type { ControlVarsPrimer } from '../PrimerToCovariantsGroup'

export const getControlVarsList = (props: ControlVarsPrimer): ReadonlyArray<CovariantControlVars> => {
  const { variedValue } = props

  if ( Object.keys(PitchIds).includes(variedValue) ) {
    const variedArray = getPitchIds(variedValue as PitchIds)

    const covariantControlVarsList = variedArray.map((variedValue) => {
      const variedPrimer = { ...props, variedValue } as ControlVarsPrimer
      return getControlVars(variedPrimer)
    }) as ReadonlyArray<CovariantControlVars>

    return covariantControlVarsList
  }

  throw new Error('Not set up to handle varied pozitions yet')
}
