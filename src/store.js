import react from 'react'
import { applyMiddleware, createStore } from "redux"

// import { createLogger, logger } from "redux-logger"
import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"

import reducer from "./reducers/Reducers"

const middleware = applyMiddleware(/*promise(),*/ thunk, /*logger()*/)

const store = createStore(reducer, middleware)
store.subscribe( () => console.log('store changed: ', store.getState() ));

export default store;
