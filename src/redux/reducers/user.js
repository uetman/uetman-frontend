var initialState = {
	username: '',
	token: '',	
	logged: false,
};

var myReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case 'DEFINE_USER':
			return {
				username: action.username,
				token: action.token,
				logged: true,
			}
		case 'ERASE_USER':
			return {
				username: '',
				token: '',
				logged: false,
			}
	}
}

export default myReducer;