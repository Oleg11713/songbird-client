import { combineReducers, createStore } from "redux";

import { birdsReducer } from "./birds/reducer";
import { progressReducer } from "./progress/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  birds: birdsReducer,
  progress: progressReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
