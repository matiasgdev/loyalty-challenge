import pagesReducer from './pages/reducer';
import { PagesState } from './pages/types';
import { AppActionsTypes } from './types';

export type StateType = {
  pages: PagesState;
};

const mainReducer = ({ pages }: StateType, action: AppActionsTypes) => ({
  pages: pagesReducer(pages, action),
});

export default mainReducer;
