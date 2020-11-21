import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
// import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

// import anecdotesService from './services/anecdotes'

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notificationReducer,
	filter: filterReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)

// anecdotesService.getAll().then(anecdotes =>
// 	store.dispatch(initializeAnecdotes(anecdotes))
// )

export default store