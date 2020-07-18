import type { HarpStrata } from 'harpstrata'

import type { HarpFaceFragmentProps } from '../HarpFaceFragment'
import type { SetActiveHarpStrata } from '../../types'

export type HarpFaceProps = Pick<HarpFaceFragmentProps, 'activeDisplayMode'> & {
  readonly activeHarpStrata: HarpStrata
  readonly setActiveHarpStrata: SetActiveHarpStrata
}
