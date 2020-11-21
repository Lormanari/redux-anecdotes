const notificationReducer = (state = '', action) => {
	console.log('ACTION: ', action)
	switch (action.type) {
	  case 'SET_NOTIFICATION':
		return action.notification
	  default:
		return state
	}
}

export const notificationChange = (notification,time) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			notification,
		})
		setTimeout(() => {
			dispatch(notificationChange(''))
		}, time)
	}
}

export default notificationReducer