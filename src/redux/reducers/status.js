var initialState = false;

var myReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TOGGLE_STATUS' : 
			state = !state;
			break;
		default: 
			break;
	}
	
	return state; 
}

export default myReducer;