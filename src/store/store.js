import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {allReducer} from '../reducers/combineReducers'

export const store = createStore(allReducer , composeWithDevTools(applyMiddleware(logger,thunk)) )