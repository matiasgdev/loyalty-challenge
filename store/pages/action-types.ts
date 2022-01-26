export const RESET = 'RESET';
export const SET_CURRNET_PAGE_ACTION = 'SET_CURRNET_PAGE_ACTION';
export const SET_PAGES_ACTION = 'SET_PAGES_ACTION';
export const SET_LIMIT_ACTION = 'SET_LIMIT_ACTION';

export interface ResetAction {
  type: typeof RESET;
}

export interface SetCurrentPageAction {
  type: typeof SET_CURRNET_PAGE_ACTION;
  value: number;
}

export interface SetPagesAction {
  type: typeof SET_PAGES_ACTION;
  size: number;
}
export interface SetLimitAction {
  type: typeof SET_LIMIT_ACTION;
  limit: number;
}

export type PagesActions = ResetAction | SetCurrentPageAction | SetPagesAction | SetLimitAction;
