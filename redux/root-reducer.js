import { combineReducers } from "redux";
import AlgoReducer from "./algo.reducer";

const rootReducer = combineReducers({
    algo:AlgoReducer
})

export default rootReducer;