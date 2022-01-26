export const RESET = 'RESET';
export const SET_OPTIONS_ACTION = 'SET_OPTIONS_ACTION';
export const SET_OPTION_ACTION = 'SET_OPTION_ACTION';
export const SET_SORT_BY_ACTION = 'SET_SORT_BY_ACTION';

export interface ResetAction {
  type: typeof RESET;
}

export interface SetOptionsAction {
  type: typeof SET_OPTIONS_ACTION;
  options: string[];
}

export interface SetOptionAction {
  type: typeof SET_OPTION_ACTION;
  option: string;
}

export interface SetSortByAction {
  type: typeof SET_SORT_BY_ACTION;
  sortBy: string;
}

export type ProductsActions = ResetAction | SetOptionsAction | SetOptionAction | SetSortByAction;
