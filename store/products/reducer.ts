import { ProductsState } from './types';
import * as ACTIONS from './action-types';
import { AppActionsTypes } from '../types';
import { initStateWith } from '../global';

const modalsReducer = (state: ProductsState, action: AppActionsTypes): ProductsState => {
  switch (action.type) {
    case ACTIONS.RESET: {
      return initStateWith.products;
    }

    case ACTIONS.SET_OPTIONS_ACTION: {
      return {
        ...state,
        options: action.options,
      };
    }

    case ACTIONS.SET_OPTION_ACTION: {
      return {
        ...state,
        selectedOption: action.option,
      };
    }

    case ACTIONS.SET_SORT_BY_ACTION: {
      return {
        ...state,
        selectedSortBy: action.sortBy,
      };
    }

    default:
      return state;
  }
};

export default modalsReducer;
