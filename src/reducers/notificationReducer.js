const notificationReducer = (state = '', action) => {
	console.log('ACTION: ', action)
	switch (action.type) {
	  case 'SET_NOTIFICATION':
		return action.notification
	  default:
		return state
	}
}

let timeoutID

export const notificationChange = (notification,time) => {
	return async dispatch => {
		dispatch({
			type: 'SET_NOTIFICATION',
			notification,
		})

		if (timeoutID) {
			clearTimeout(timeoutID)
		}

		timeoutID = setTimeout(() => {
			dispatch({
				type: 'SET_NOTIFICATION',
				notification: '',
			})
		}, time)
		console.log(timeoutID)
	}
}

export default notificationReducer