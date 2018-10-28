import * as types from './../constants/ActionTypes';

export const status = () => {
	return {
		type: types.TOGGLE_STATUS
	}
}

export const changeCategory = (category) => {
	return {
		type: types.CHANGE_CATEGORY,
		category: category
	}
}