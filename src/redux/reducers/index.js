import { combineReducers } from 'redux';
import page from './page';
import user from './user';

const myReducer = combineReducers({
	page,
	user,
});

export default myReducer;