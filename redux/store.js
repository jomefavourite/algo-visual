import {createStore , applyMiddleware} from  "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from  "redux-logger";
import rootReducer from "./root-reducer";
import { createWrapper } from "next-redux-wrapper";

const middlewares = [];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}

const store  = () =>  createStore(  rootReducer, composeWithDevTools     (applyMiddleware(...middlewares)  )   );


export const wrapper  = createWrapper(store);