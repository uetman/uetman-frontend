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

export const defineUser = (user) => {
	return {
		type: types.DEFINE_USER,
		id: user.id,
		token: user.token,
	}
}

export const eraseUser = () => {
	return {
		type: types.ERASE_USER,
	}
}