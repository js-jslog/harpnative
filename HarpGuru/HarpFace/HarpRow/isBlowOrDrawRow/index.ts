import { InteractionIds } from 'harpstrata'

import type { HarpRowProps } from '../types'


export const isBlowRow = (props: HarpRowProps): boolean => {
  const { yCoord, activeHarpStrata } = props
  const { apparatus: {interactionMatrix }} = activeHarpStrata
  const { [yCoord]: {[0]: thisInteraction} } = interactionMatrix
  const { id: interactionId } = thisInteraction || { id: undefined }
  const isBlow = (interactionId === InteractionIds.Blow)

  return isBlow
}

export const isDrawRow = (props: HarpRowProps): boolean => {
  const { yCoord, activeHarpStrata } = props
  const { apparatus: {interactionMatrix }} = activeHarpStrata
  const { [yCoord]: {[0]: thisInteraction} } = interactionMatrix
  const { id: interactionId } = thisInteraction || { id: undefined }
  const isDraw = (interactionId === InteractionIds.Draw)

  return isDraw
}

export const isBlowOrDrawRow = (props: HarpRowProps): boolean => {
  return (isBlowRow(props) || isDrawRow(props))
}
