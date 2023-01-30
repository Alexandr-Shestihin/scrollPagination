import { reducerTodos } from "../reducers/todoReducer";

import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
   reducerTodos,
})

export const store = createStore(reducer, applyMiddleware(thunk));