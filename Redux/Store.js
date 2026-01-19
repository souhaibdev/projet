import { createStore,combineReducers } from "redux";
import formationReducer from "./FormationReducer"
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    formation : formationReducer,
    auth : authReducer,
})

const store = createStore(rootReducer)
export default store;