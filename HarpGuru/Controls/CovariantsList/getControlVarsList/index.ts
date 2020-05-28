import { PitchIds, getPitchIds } from 'harpstrata'
import type { PozitionControlVars } from 'harpstrata'

import { getControlVars } from '../PrimerToCovariantsGroup'
import type { ControlVarsPrimer } from '../PrimerToCovariantsGroup'

export const getControlVarsList = (props: ControlVarsPrimer): ReadonlyArray<PozitionControlVars> => {
  const { variedValue } = props

  if ( Object.keys(PitchIds).includes(variedValue) ) {
    const variedArray = getPitchIds(variedValue as PitchIds)

    const covariantControlVarsList = variedArray.map((variedValue) => {
      const variedPrimer = { ...props, variedValue } as ControlVarsPrimer
      return getControlVars(variedPrimer)
    }) as ReadonlyArray<PozitionControlVars>

    return covariantControlVarsList
  }

  throw new Error('Not set up to handle varied pozitions yet')
}
