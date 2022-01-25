import modalsReducer from './modals/reducer';
import { ModalsState } from './modals/types';
import { AppActionsTypes } from './types';

export type StateType = {
    modals: ModalsState,
};

const mainReducer = ({ modals }: StateType, action: AppActionsTypes) => ({
    modals: modalsReducer(modals, action),
});

export default mainReducer;
