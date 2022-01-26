import {
  SetCurrentPageAction,
  SetLimitAction,
  SetPagesAction,
  SET_CURRNET_PAGE_ACTION,
  SET_LIMIT_ACTION,
  SET_PAGES_ACTION,
} from './action-types';

export const setPageAction = (page: number): SetCurrentPageAction => {
  return {
    type: SET_CURRNET_PAGE_ACTION,
    value: page,
  };
};
export const setPages = (size: number): SetPagesAction => {
  return {
    type: SET_PAGES_ACTION,
    size,
  };
};
export const setLimit = (limit: number): SetLimitAction => {
  return {
    type: SET_LIMIT_ACTION,
    limit,
  };
};
