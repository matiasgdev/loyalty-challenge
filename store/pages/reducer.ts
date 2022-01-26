import { PagesState } from './types';
import * as ACTIONS from './action-types';
import { AppActionsTypes } from '../types';

const pagesReducer = (state: PagesState, action: AppActionsTypes): PagesState => {
  switch (action.type) {
    case ACTIONS.RESET: {
      return { ...state, currentPage: 1 };
    }
    case ACTIONS.SET_CURRNET_PAGE_ACTION: {
      return {
        ...state,
        currentPage: action.value,
      };
    }
    case ACTIONS.SET_PAGES_ACTION: {
      return {
        ...state,
        pages: action.size,
      };
    }
    case ACTIONS.SET_LIMIT_ACTION: {
      return {
        ...state,
        limit: action.limit,
      };
    }
    default:
      return state;
  }
};

export default pagesReducer;
