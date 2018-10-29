import * as types from './../constants/ActionTypes';


export const changePage = (page) => {
	return {
		type: types.CHANGE_PAGE,
		page: page
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