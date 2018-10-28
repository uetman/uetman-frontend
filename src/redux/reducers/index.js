import { combineReducers } from 'redux';
import status from './status';
import category from './category';

const myReducer = combineReducers({
	status,
	category,
});

export default myReducer;