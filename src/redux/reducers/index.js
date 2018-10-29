import { combineReducers } from 'redux';
import status from './status';
import category from './category';
import user from './user';

const myReducer = combineReducers({
	status,
	category,
	user,
});

export default myReducer;