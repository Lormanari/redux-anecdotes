import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotes'

const NewAnecdote = (props) => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		console.log('vote', event)
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		// dispatch(createAnecdote(content))
		const newAnecdote = await anecdotesService.createNew(content)
    	dispatch(createAnecdote(newAnecdote))
	}
	return (
		<div>
		  <h2>create new</h2>
		  <form onSubmit={addAnecdote}>
			<div><input name="anecdote" /></div>
			<button type="submit">create</button>
		  </form>
		</div>
	  )
}

export default NewAnecdote