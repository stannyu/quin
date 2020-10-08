import { GET_LAUNCHES_LIST } from '../constants/action-types';

const INITIAL_STATE = {
    launchesList: [],
};

const applyStoreLaunchesList = (state, action) => {
    const { launchesList } = action;
    return { ...state, launchesList };
};

function launchesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_LAUNCHES_LIST: {
            return applyStoreLaunchesList(state, action);
        }
        default:
            return state;
    }
}

export default launchesReducer;
