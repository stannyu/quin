import { combineReducers } from 'redux';

import launchesReducer from "./launches";

const rootReducer = combineReducers({
  launchesState: launchesReducer
});

export default rootReducer;
