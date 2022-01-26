import React, { createContext, useReducer, useContext, useMemo, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import reducer, { StateType } from './combine-reducers';
import { setLimit } from './pages/actions';
import { AppActionsTypes } from './types';

type ContextTypes = {
  state: StateType;
  dispatch: React.Dispatch<AppActionsTypes>;
};

export const initStateWith: StateType = {
  pages: {
    currentPage: 1,
  },
};

export default function makeStore() {
  const context = createContext<ContextTypes>({
    state: initStateWith,
    dispatch: () => null,
  });

  const StoreProvider: React.FC<{ initialState: StateType }> = ({ children, initialState }) => {
    const isMobile = useMediaQuery(1024);
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValues = useMemo(() => ({ state, dispatch }), [state]);

    useEffect(() => {
      dispatch(setLimit(isMobile ? 8 : 16));
    }, [isMobile]);

    return <context.Provider value={contextValues}>{children}</context.Provider>;
  };

  const useStore = () => useContext(context);

  return { useStore, StoreProvider };
}
