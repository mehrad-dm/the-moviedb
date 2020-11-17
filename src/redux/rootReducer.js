import { combineReducers } from 'redux';
import genresReducer from './genres/reducer';

const rootReducer = combineReducers({ genres: genresReducer });

export default rootReducer;
