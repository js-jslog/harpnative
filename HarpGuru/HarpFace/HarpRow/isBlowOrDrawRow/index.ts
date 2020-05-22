import { InteractionIds } from 'harpstrata'

import type { HarpRowProps } from '../types'

export const isBlowOrDrawRow = (props: HarpRowProps): boolean => {
  const { yCoord, activeHarpStrata } = props
  const { apparatus: {interactionMatrix }} = activeHarpStrata
  const { [yCoord]: {[0]: thisInteraction} } = interactionMatrix
  const { id: interactionId } = thisInteraction || { id: undefined }
  const isBlow = (interactionId === InteractionIds.Blow)
  const isDraw = (interactionId === InteractionIds.Draw)

  return (isBlow || isDraw)
}
