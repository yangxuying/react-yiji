import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import comments from './reducer/comments';
import tuijians from './reducer/tuijians';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  tuijians,
  comments
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
