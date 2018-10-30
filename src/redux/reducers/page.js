var initialState = 'Materials';

var myReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CHANGE_PAGE':
			// console.log(action.category);
			state = action.page;
			break;
		default:
			break;
	}
	
	return state; 
}

export default myReducer;