import { SetOptionAction, SetOptionsAction, SetSortByAction, SET_OPTIONS_ACTION, SET_OPTION_ACTION, SET_SORT_BY_ACTION } from './action-types';

export const setOptions = (options: string[]): SetOptionsAction => {
  return {
    type: SET_OPTIONS_ACTION,
    options,
  };
};
export const setSelectedOption = (selected: string): SetOptionAction => {
  return {
    type: SET_OPTION_ACTION,
    option: selected,
  };
};

export const setSelectedSortBy = (selected: string): SetSortByAction => {
  return {
    type: SET_SORT_BY_ACTION,
    sortBy: selected,
  };
};
