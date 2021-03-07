import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  authentication: authentication,
  registration: registration,
  users: users,
  alert: alert,
});

export default rootReducer;
