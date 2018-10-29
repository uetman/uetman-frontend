var initialState = {
	id: '',
	token: '',	
	logged: false,
};

var myReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			break;
		case 'DEFINE_USER':
			state.id = action.id;
			state.token = action.token;
			state.logged = true;
			break;
		case 'ERASE_USER':
			state.id = '';
			state.token = '';
			state.logged = false;
	}
	return state;
}

export default myReducer;