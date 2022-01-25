import React, { createContext, useReducer, useContext, useMemo } from 'react';
import reducer, { StateType } from './combine-reducers';
import { AppActionsTypes } from './types';

type ContextTypes = {
    state: StateType;
    dispatch: React.Dispatch<AppActionsTypes>;
};

export const initStateWith: StateType = {
    modals: {}
};

export default function makeStore() {
    const context = createContext<ContextTypes>({
        state: initStateWith,
        dispatch: () => null,
    });

    const StoreProvider: React.FC<{ initialState: StateType }> = ({ children, initialState }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const contextValues = useMemo(() => ({ state, dispatch }), [state]);

        return <context.Provider value={contextValues}>{children}</context.Provider>;
    };

    const useStore = () => useContext(context);

    return { useStore, StoreProvider };
}
