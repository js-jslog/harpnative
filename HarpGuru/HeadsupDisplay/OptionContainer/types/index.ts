import { HarpStrata } from 'harpstrata'

export type OptionContainerProps = {
  readonly title: string
  readonly optionId: string
  readonly nudgeFunction: (arg0: 'UP' | 'DOWN') => HarpStrata
  readonly setActiveHarpStrata: (arg0: HarpStrata) => void
}
