var initialState = 'Materials';

var myReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CHANGE_CATEGORY':
			// console.log(action.category);
			state = action.category;
			break;
		default:
			break;
	}
	
	return state; 
}

export default myReducer;