import type { HarpStrata } from 'harpstrata'

export enum DisplayModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}
export type SetActiveDisplayMode = (arg0: DisplayModes) => void

export enum ExperienceModes {
  Explore = 'EXPLORE',
  Quiz = 'QUIZ',
}

export type SetActiveHarpStrata = (arg0: HarpStrata) => void

export enum MenuStates {
  LayoutMenu,
  CovariantMenu,
  NoMenu,
}
