import pagesReducer from './pages/reducer';
import productsReducer from './products/reducer';
import { PagesState } from './pages/types';
import { AppActionsTypes } from './types';
import { ProductsState } from './products/types';

export type StateType = {
  pages: PagesState;
  products: ProductsState;
};

const mainReducer = ({ pages, products }: StateType, action: AppActionsTypes) => ({
  pages: pagesReducer(pages, action),
  products: productsReducer(products, action),
});

export default mainReducer;
