import { ModalsState } from './types';
import * as ACTIONS from './action-types';
import { AppActionsTypes } from '../types';

const modalsReducer = (state: ModalsState, action: AppActionsTypes) => {
    switch (action.type) {
        case ACTIONS.RESET: {
            return { };
        }
        default:
            return state;
    }
};

export default modalsReducer;
